import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, FirebaseStorage as Storage } from "firebase/storage";

interface StorageResult<T = void> {
  success: boolean;
  data?: T | null;
  error?: unknown;
}

const storage = getStorage();

const uploadFile = async (storage: Storage, path: string, file: File): Promise<StorageResult<string>> => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { success: true, data: url };
  } catch (error) {
    return { success: false, error };
  }
};

const getFileURL = async (storage: Storage, path: string): Promise<StorageResult<string>> => {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return { success: true, data: url };
  } catch (error) {
    return { success: false, error };
  }
};

const deleteFile = async (storage: Storage, path: string): Promise<StorageResult> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export {storage, uploadFile, getFileURL, deleteFile };
