import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Users/UserContext.Config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, Setuser] = useState(null);
  const [loading, SetLoading] = useState(true);
  const SignUp = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const GoogleProvider = (provider) => {
    SetLoading(true);
    return signInWithPopup(auth, provider);
  };
  const GithubProvider = (provider) => {
    SetLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log('user changed',currentuser)
      Setuser(currentuser);
      SetLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user: user,
    loading,
    logOut,
    SignUp,
    updateUserProfile,
    GoogleProvider,
    GithubProvider,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
