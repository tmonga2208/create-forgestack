"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                const { uid, email, displayName, photoURL } = firebaseUser;
                setUser({ uid, email, displayName, photoURL });
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
