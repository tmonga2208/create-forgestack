import { Database, ref, set, get, remove, update, onValue } from "firebase/database";

interface FirebaseResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}

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

const updateData = async <T>(database: Database, path: string, data: Partial<T>): Promise<FirebaseResult> => {
  try {
    await update(ref(database, path), data);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const subscribeToData = <T>(database: Database, path: string, callback: (data: T | null) => void): void => {
  const dataRef = ref(database, path);
  onValue(dataRef, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null);
  });
};

export { addData, getData, deleteData, updateData, subscribeToData };