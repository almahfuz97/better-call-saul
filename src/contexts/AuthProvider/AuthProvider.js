import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // create user with email and pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUser = (userInfo) => {
        setLoading(true);
        return (
            updateProfile(auth.currentUser, userInfo)
                .then((res) => {
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err)
                }
                ))
    }
    // logOut
    const logOut = () => {
        localStorage.removeItem('service-token')
        return signOut(auth);
    }

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



    // objects to share with all children
    const authInfo = { user, loading, logOut, providerSignIn, createUser, signIn, setLoading, updateUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
