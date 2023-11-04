import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      FIREBASE_API_KEY : "AIzaSyDdTwRjWZ67p-lPmj94Bn6MkaORxFk3XL4",
      FIREBASE_AUTH_DOMAIN : "emckart-f5fb4.firebaseapp.com",
      FIREBASE_PROJECT_ID : "emckart-f5fb4",
      FIREBASE_STORAGE_BUGKET : "emckart-f5fb4.appspot.com",
      FIREBASE_MESSAGE_SENDER_ID : "886366875005",
      FIREBASE_APP_ID : "1:886366875005:web:3138914f883c6d1b77b014",
      FIREBASE_MEASURMENT_ID : "G-927C4ZR7M1"
    }
  }
})
