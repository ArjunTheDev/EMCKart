import {  signInWithEmailAndPassword   } from 'firebase/auth'
import { auth } from '../config/firebase'

export const firebaseLogin = (user) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
}

export const getUserAuthToken = async () => {
    return auth.currentUser ? await auth.currentUser.getIdToken() : null
}

export const signoutFirebaseUser = async () => {
    try {
        await auth.signOut();
        // Handle any additional logic after successful logout
    } catch (error) {
        // Handle any errors that occur during logout
        console.error('Error logging out:', error);
    }
}