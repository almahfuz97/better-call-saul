import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase.config';

// firebase auth
const auth = getAuth(app)
// context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // provider sign in
    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // create user with email and pass

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser || currentUser === null) {
                setUser(currentUser);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [])

    const logOut = () => {

    }

    // objects to share with all children
    const authInfo = { user, logOut, providerSignIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
