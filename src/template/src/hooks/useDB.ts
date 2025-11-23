import { collection, doc, setDoc, getDoc, deleteDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface FirebaseResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}

const addData = async <T>(collectionPath: string, data: T & { createdAt: Date | Timestamp }): Promise<FirebaseResult<T & { id: string }>> => {
  try {
    const pathParts = collectionPath.split('/');
    let docRef;
    if (pathParts.length % 2 === 0) {
      docRef = doc(db, collectionPath);
    } else {
      docRef = doc(collection(db, collectionPath));
    }

    // Convert Date to Timestamp
    const firebaseData = {
      ...data,
      createdAt: data.createdAt instanceof Date ? Timestamp.fromDate(data.createdAt) : data.createdAt,
    };

    await setDoc(docRef, firebaseData);
    return {
      success: true,
      data: {
        ...data,
        id: docRef.id,
        createdAt: data.createdAt
      } as T & { id: string }
    };
  } catch (error) {
    console.error('Error adding data:', error);
    return { success: false, error };
  }
};

const getCollection = async <T>(collectionPath: string): Promise<FirebaseResult<(T & { id: string; createdAt: Date | Timestamp })[]>> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionPath));
    const data = querySnapshot.docs.map(doc => {
      const docData = doc.data();
      return {
        ...docData,
        id: doc.id,
        createdAt: docData.createdAt instanceof Timestamp ? docData.createdAt.toDate() : docData.createdAt
      } as T & { id: string; createdAt: Date | Timestamp };
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error getting collection:', error);
    return { success: false, error };
  }
};

const getData = async <T>(path: string): Promise<FirebaseResult<T & { id: string; createdAt: Date | Timestamp }>> => {
  try {
    const docSnap = await getDoc(doc(db, path));
    if (docSnap.exists()) {
      const docData = docSnap.data();
      return {
        success: true,
        data: {
          ...docData,
          id: docSnap.id,
          createdAt: docData.createdAt instanceof Timestamp ? docData.createdAt.toDate() : docData.createdAt
        } as T & { id: string; createdAt: Date | Timestamp }
      };
    } else {
      return { success: false, data: null };
    }
  } catch (error) {
    console.error('Error getting data:', error);
    return { success: false, error };
  }
};

const deleteData = async (path: string): Promise<FirebaseResult> => {
  try {
    await deleteDoc(doc(db, path));
    return { success: true };
  } catch (error) {
    console.error('Error deleting data:', error);
    return { success: false, error };
  }
};

export { addData, getData, deleteData, db, getCollection };