import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {

            })
            .finally(() => setIsLoading(false))
    }
    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user)

            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false))
    }
    //observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }





    return {
        user,
        signInUsingGoogle,
        signInUsingFacebook,
        logout,
        isLoading
    }
};

export default useFirebase;