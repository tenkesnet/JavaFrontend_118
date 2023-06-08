import { FirebaseApp, initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase.config'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    Auth,
    AuthProvider,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, FirestoreError } from 'firebase/firestore';
import { WebshopUser } from '../model/WebshopUser';

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

const provider: GoogleAuthProvider = new GoogleAuthProvider()



provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth: Auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    user: WebshopUser
) => {
    if (!user.userAuth) return;

    const userDocRef = doc(db, 'users', user.userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (e) {
            const error = e as FirestoreError
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return (await createUserWithEmailAndPassword(auth, email, password)).user;
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return (await signInWithEmailAndPassword(auth, email, password)).user;
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
    onAuthStateChanged(auth, callback);
