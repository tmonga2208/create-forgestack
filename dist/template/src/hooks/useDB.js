import { collection, doc, setDoc, getDoc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
const addData = async (collectionPath, data) => {
    try {
        const newDocRef = doc(collection(db, collectionPath));
        await setDoc(newDocRef, data);
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
const getCollection = async (collectionPath) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionPath));
        const data = querySnapshot.docs.map(doc => doc.data());
        return { success: true, data };
    }
    catch (error) {
        return { success: false, error };
    }
};
const getData = async (path) => {
    try {
        const docSnap = await getDoc(doc(db, path));
        if (docSnap.exists()) {
            return { success: true, data: docSnap.data() };
        }
        else {
            return { success: false, data: null };
        }
    }
    catch (error) {
        return { success: false, error };
    }
};
const deleteData = async (path) => {
    try {
        await deleteDoc(doc(db, path));
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
export { addData, getData, deleteData, db, getCollection };
