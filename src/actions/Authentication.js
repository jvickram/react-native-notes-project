import firebase from 'firebase'
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER
} from './types'
import { Actions } from 'react-native-router-flux'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => 
                loginUserSuccess(dispatch, user))
            .catch((error) => {
                loginUserFail(dispatch)
            console.log('error',error.message);
        })
    }
}

export const signupUser = ({ email, password }) => {
    console.log('Creating user')
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER})
         firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => signupUserSuccess(dispatch, user))
                    .catch((error) => signupUserFail(dispatch,error))
    }
}

const loginUserFail = (dispatch) => { 
    dispatch({ 
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = (dispatch, user) => { 
    dispatch({ 
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    console.log('Login success, routing to Notes page')
    Actions.main()
}

const signupUserFail = (dispatch, error) => { 
    console.log('Signup failed due to ',error.code)
    dispatch({ 
        type: SIGNUP_USER_FAIL,
        payload: error.code
    })
}

const signupUserSuccess = (dispatch, user) => { 
    dispatch({ 
        type: SIGNUP_USER_SUCCESS,
        payload: user
    })
    console.log('Signup user success, routing to Notes page')
    Actions.main()
}