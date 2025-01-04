import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // To create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with Email and Password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with github
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // update user data
  const updateUserData = (createdUser, displayName, photoURL) => {
    setLoading(true);
    return updateProfile(createdUser, { displayName, photoURL });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = { email: currentUser?.email || user?.email };
      setUser(currentUser);
      setLoading(false);
      // generate token
      if (currentUser) {
        axios
          .post("https://ns-coffee-cafe-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("https://ns-coffee-cafe-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserData,
    signInUser,
    googleSignIn,
    githubSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
