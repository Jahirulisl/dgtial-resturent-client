import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
//from firebase app st
const auth = getAuth(app);
//from firebase app end

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //FOR CREATE USER START
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //FOR CREATE USER END

  //for signin user start
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  //for signin user end

  //for logOut user start
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  //for logOut user end

  //FOR UPDATE PROFILE START
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }
  //FOR UPDATE PROFILE END

  //FOR USER MANAJE START
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser)
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])
  //FOR USER MANAJE end

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,


  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;