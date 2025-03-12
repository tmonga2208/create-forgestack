import { getFirestore, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

interface FirebaseResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}

const db = getFirestore();

const addData = async <T extends Record<string, unknown>>(path: string, data: T): Promise<FirebaseResult> => {
  try {
    await setDoc(doc(db, path), data);
    return { success: true };
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

export { addData, getData, deleteData, db };
