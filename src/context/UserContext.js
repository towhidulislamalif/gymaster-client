import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actiontypes } from '../state/actiontypes';
import { initialState, productReducer } from '../state/userReducer';
// createContext
const USER_CONTEXT = createContext();

const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actiontypes.FETCHING_START });
    fetch(`${process.env.REACT_APP_SERVER_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actiontypes.FETCHING_SUCCESS, payload: data.data });
        // code
      })
      .catch((err) => {
        // code
        console.log(err.message);
        dispatch({ type: actiontypes.FETCHING_ERROR });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };
  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};
// simple custom hooks
export const useUserContext = () => {
  const user = useContext(USER_CONTEXT);
  return user;
};

export default UserContext;
