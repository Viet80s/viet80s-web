import { getFirestore, doc, setDoc, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";
import firebase_app from "./firebaseConfig";

const db = getFirestore(firebase_app)
// TODO: add defauld values for Point, Stamp, and Transactions
export async function addNewUser(uid: string, email: string, password: string, display_name: string, birthMonth: number, birthDay: number) {
    let result = null,
        error = null;
        
    try {
        result = await setDoc(doc(db, "users", uid), {email, password, display_name, birthDay, birthMonth}, {
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

export async function getUser(uid: string) {
    let result = null,
        error = null;
    let docRef = doc(db, "users", uid);
    try {
        result = result = await getDoc(docRef);
        console.log("Get User successfully");
    } catch (e) {
        error = e;
    }

    return { result, error };
}