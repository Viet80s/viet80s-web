import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from "./firebaseConfig";

const db = getFirestore(firebase_app)

export default async function addNewUser(uid: string, email: string, password: string, firstName: string, lastName: string, birthMonth: number, birthDay: number) {
    let result = null,
        error = null;
        
    try {
        result = await setDoc(doc(db, "users", uid), {email, password, firstName, lastName, birthDay, birthMonth}, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}