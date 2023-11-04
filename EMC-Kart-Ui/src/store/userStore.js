import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebaseLogin } from '../service/firebaseService';
import axios from 'axios';

export const loginUser = createAsyncThunk(('user/login'), async(userData) => {
    const firebaseResponse = await firebaseLogin(userData)
    const userResponse = await axios.post('http://localhost:8080/api/user/login', firebaseResponse.user)
    const finalRes = await userResponse.data
    return finalRes
})

export const registerUser = createAsyncThunk(('user/register'), async(userData, { rejectWithValue }) => {
    try{
        const userResponse = await axios.post('http://localhost:8080/api/user/register', userData)
        return userResponse
    } catch (error) {
        if (error.response.status >= 400) {
            return rejectWithValue({ message: error.response.data.message })
          }
        return rejectWithValue({message: 'Some Other message'})
    }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    userData: {},
    error: null
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
        state.loading = true,
        state.userData = {},
        state.error = null
    })
    .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false,
        state.userData = action.payload,
        state.error = null
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.loading = false,
        state.userData = {},
        state.error = action.error
    })
    .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.userData = {},
        state.error = null
    })
    .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        state.userData = {},
        state.error = null
    })
    .addCase(registerUser.rejected, (state, action) => {
        state.loading = false,
        state.userData = {},
        state.error = action.payload.message
    })
  }
});

export default userSlice.reducer;
