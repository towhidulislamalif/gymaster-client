import { actiontypes } from './actiontypes';

export const initialState = {
  loading: false,
  users: [],
  error: false,
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case actiontypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actiontypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: false,
      };
    case actiontypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actiontypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
      };
    default:
      return state;
  }
};
