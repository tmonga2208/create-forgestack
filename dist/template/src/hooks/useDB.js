import { getFirestore, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
const db = getFirestore();
const addData = async (path, data) => {
    try {
        await setDoc(doc(db, path), data);
        return { success: true };
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
export { addData, getData, deleteData, db };
