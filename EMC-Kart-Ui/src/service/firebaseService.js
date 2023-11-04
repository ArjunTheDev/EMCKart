import {  signInWithEmailAndPassword   } from 'firebase/auth'
import { auth } from '../config/firebase'

export const firebaseLogin = async (user) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
}