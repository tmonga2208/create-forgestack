import { Database, getDatabase, ref, set, get, remove } from "firebase/database";

interface FirebaseResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}

const db = getDatabase();
const addData = async <T>(database: Database, path: string, data: T): Promise<FirebaseResult> => {
  try {
    await set(ref(database, path), data);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const getData = async <T>(database: Database, path: string): Promise<FirebaseResult<T>> => {
  try {
    const snapshot = await get(ref(database, path));
    if (snapshot.exists()) {
      return { success: true, data: snapshot.val() };
    } else {
      return { success: false, data: null };
    }
  } catch (error) {
    return { success: false, error };
  }
};

const deleteData = async (database: Database, path: string): Promise<FirebaseResult> => {
  try {
    await remove(ref(database, path));
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export { addData, getData, deleteData ,db };