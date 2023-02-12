export const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  error: '',
};
export const authReducer = (state, action) => {
  //   console.log('🚀 ~ file: authReducer.js:9 ~ authReducer ~ action', action);
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
