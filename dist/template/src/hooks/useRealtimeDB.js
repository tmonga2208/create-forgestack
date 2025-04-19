import { ref, set, get, remove, update, onValue } from "firebase/database";
const addData = async (database, path, data) => {
    try {
        await set(ref(database, path), data);
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
const getData = async (database, path) => {
    try {
        const snapshot = await get(ref(database, path));
        if (snapshot.exists()) {
            return { success: true, data: snapshot.val() };
        }
        else {
            return { success: false, data: null };
        }
    }
    catch (error) {
        return { success: false, error };
    }
};
const deleteData = async (database, path) => {
    try {
        await remove(ref(database, path));
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
const updateData = async (database, path, data) => {
    try {
        await update(ref(database, path), data);
        return { success: true };
    }
    catch (error) {
        return { success: false, error };
    }
};
const subscribeToData = (database, path, callback) => {
    const dataRef = ref(database, path);
    onValue(dataRef, (snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : null);
    });
};
export { addData, getData, deleteData, updateData, subscribeToData };
