const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: 'logged in',
      };
    case 'LOGIN_ERROR':
      console.log ('login error');
      return {
        ...state,
        authError: 'Login Failed',
      };
    case 'SIGN_OUT':
      console.log ('sign out success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGN_UP':
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err,
      };

    default:
      return state;
  }
};

export default authReducer;
