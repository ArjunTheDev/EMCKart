import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/userStore';
import { useNavigate } from 'react-router-dom';
  

const Signup = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading, error} = useSelector((state) => state.user)

  const handleValueChange = (event) => {
    const {id, value} = event.target
    setUserData({...userData, [id] : value })
  }

  const handleSubmit = () => {
    try {
      dispatch(registerUser(userData)).then((response) => {
        if(!response?.error) {
          navigate('/login')
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto">            
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-black-700 text-xl text-center font-bold mb-2">EMCkart Sign Up</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(event) => handleValueChange(event)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(event) => handleValueChange(event)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone_number"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(event) => handleValueChange(event)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(event) => handleValueChange(event)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Delivery Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Delivery Address"
              onChange={(event) => handleValueChange(event)}
            />
          </div>
          { error && <p className='block text-red-500 text-sm mb-2'>* {error}</p> }
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
              onClick={() => handleSubmit()}
              disabled={loading}
            >
              { loading ? "Loading" : "Sign Up" }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
