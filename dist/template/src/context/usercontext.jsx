"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getData } from '../hooks/useDB';
const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const userData = await getData(`users/${firebaseUser.uid}`);
                setUser({
                    uid: userData?.data?.uid ?? firebaseUser.uid,
                    email: userData?.data?.email ?? firebaseUser.email,
                    displayName: userData?.data?.displayName ?? "",
                    photoURL: userData?.data?.photoURL ?? "",
                });
            }
            else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);
    return (<UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>);
};
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
