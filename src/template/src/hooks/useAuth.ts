import { signInWithEmailAndPassword, signOut, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const handleSignIn = async (email: string, password: string) => { 
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
    }
}
const handleSignUp = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
    }
}
const handleLogout = async () => { 
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
}

const handleGoogleAuth = async () => { 
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error(error);
    }
}

export { handleSignIn, handleLogout, handleGoogleAuth ,handleSignUp};