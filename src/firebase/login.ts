
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebase_app from "./firebaseConfig";

const auth = getAuth(firebase_app);

export default async function logIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function sendResetEmail(email: string) {
    let result = null,
        error = null;
    try {
        result = await sendPasswordResetEmail(auth, email);
    } catch (e) {
        error = e;
    }

    return { result, error };
}