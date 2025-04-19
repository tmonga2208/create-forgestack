import {collection, doc, setDoc, getDoc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface FirebaseResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}


const addData = async <T extends Record<string, unknown>>(collectionPath: string, data: T): Promise<FirebaseResult> => {
  try {
    const newDocRef = doc(collection(db, collectionPath)); 
    await setDoc(newDocRef, data);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const getCollection = async <T>(collectionPath: string): Promise<FirebaseResult<T[]>> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionPath));
    const data: T[] = querySnapshot.docs.map(doc => doc.data() as T);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

const getData = async <T>(path: string): Promise<FirebaseResult<T>> => {
  try {
    const docSnap = await getDoc(doc(db, path));
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() as T };
    } else {
      return { success: false, data: null };
    }
  } catch (error) {
    return { success: false, error };
  }
};

const deleteData = async (path: string): Promise<FirebaseResult> => {
  try {
    await deleteDoc(doc(db, path));
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export { addData, getData, deleteData, db,getCollection };
