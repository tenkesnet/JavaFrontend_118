import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase.config'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    Auth,
    AuthProvider
} from 'firebase/auth'



const firebaseApp = initializeApp(firebaseConfig)

const provider: GoogleAuthProvider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
    //if (userAuth) return;
    console.log(userAuth)
}

export const auth: Auth = getAuth();
export const signInWithGooglePopup = (): any => signInWithPopup(auth, provider)
