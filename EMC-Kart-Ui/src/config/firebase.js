import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdTwRjWZ67p-lPmj94Bn6MkaORxFk3XL4",
  authDomain: "emckart-f5fb4.firebaseapp.com",
  projectId: "emckart-f5fb4",
  storageBucket: "emckart-f5fb4.appspot.com",
  messagingSenderId: "886366875005",
  appId: "1:886366875005:web:3138914f883c6d1b77b014",
  measurementId: "G-927C4ZR7M1"
};

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

export default firebaseApp