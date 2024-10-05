import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut } from "firebase/auth";
import firebase_app from "./firebaseConfig";

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        if (result.user) {
            await sendEmailVerification(result.user);
            await signOut(auth);
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
}