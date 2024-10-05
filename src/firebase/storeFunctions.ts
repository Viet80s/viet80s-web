import { getFirestore, doc, setDoc, collection, addDoc, Timestamp } from "firebase/firestore";
import firebase_app from "./firebaseConfig";

const db = getFirestore(firebase_app)

export async function addNewUser(uid: string, email: string, password: string, firstName: string, lastName: string, birthMonth: number, birthDay: number) {
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

export async function addNewTransaction(uid: string, MoneySpentAmount: number, transactionType: string, Time: Timestamp) {
    let result = null,
        error = null;
    const transactionRef = collection(db, "users", uid, "transactions"); 
    try {
        result = await addDoc(transactionRef, {MoneySpentAmount, transactionType, Time});
        console.log("Transaction added successfully");
    } catch (e) {
        error = e;
    }

    return { result, error };
}