import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
  } from '../actions/types';
  
  const INITIAL_STATE = {
    email: 'jvickram2@gmail.com',
    password: 'bickey123',
    user: null,
    loginError: '',
    signUpError:'',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    console.log('action',action)
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case SIGNUP_USER:
        return { ...state, loading: true, error: '' };
      case SIGNUP_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case SIGNUP_USER_FAIL:
        return { ...state, signUpError: action.payload, email: '', password: '', loading: false };
      case LOGIN_USER:
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_FAIL:
      return { ...state, loginError: 'Login failed', password: '', loading: false };
      default:
        return state;
    }
  };
  