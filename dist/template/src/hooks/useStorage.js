import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
const storage = getStorage();
const uploadFile = async (storage, path, file) => {
    try {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return { success: true, data: url };
    }
    catch (error) {
        return { success: false, error };
    }
};
const getFileURL = async (storage, path) => {
    try {
        const storageRef = ref(storage, path);
        const url = await getDownloadURL(storageRef);
        return { success: true, data: url };
    }
    catch (error) {
        return { success: false, error };
    }
};
const deleteFile = async (storage, path) => {
    try {
        const storageRef = ref(storage, path);
        await deleteObject(storageRef);
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
export { storage, uploadFile, getFileURL, deleteFile };
