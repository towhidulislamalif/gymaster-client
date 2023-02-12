import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
// firebase config
import app from '../firebase/firebase.config';
import { authReducer, initialState } from '../state/authReducer';
// create context
export const AUTH_CONTEXT = createContext();

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  // state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(authReducer, initialState);
  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Sign up new users
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update a users profile
  const profile = (name) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Sign in existing users
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Send a password reset email
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // signOut
  const signout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    state,
    dispatch,
    createUser,
    profile,
    signIn,
    signout,
    resetPassword,
  };
  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AUTH_CONTEXT);
  return context;
};

export default AuthContext;
