import firebase from 'firebase'
import { 
    NOTE_UPDATE,
    ADD_NOTE,
    NOTES_FETCH_SUCCESS,
    NOTE_SAVE_SUCCESS,
    CLEAR_FORM
} from './types'
import { Actions } from 'react-native-router-flux'


export const clearForm = () => {
    return (dispatch) => {
        dispatch({type: CLEAR_FORM})
        Actions.notesList({ type: 'reset'})
    }
}

export const noteUpdate = ({ prop, value }) => {
    return {
        type: NOTE_UPDATE,
        payload: { prop, value }
    }
}

export const addNote = ({ name, details }) => {
    const { currentUser } = firebase.auth()
    
    return (dispatch) => {
    // firebase.database().ref(`/users/userId/notes`)
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .push({ name, details})
    .then(() => {
        dispatch({ type: ADD_NOTE })
        Actions.notesList({ type: 'reset'})}) // reset show that the view does not have back button
    }
} 

export const notesFetch = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
        .on('value', snapshot => {
            dispatch({ type: NOTES_FETCH_SUCCESS, payload: snapshot.val() })
        })
    }
}

export const noteSave = ({ name, details, uid}) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
        .set({ name, details})
        .then(() => {
            dispatch({ type: NOTE_SAVE_SUCCESS })
            Actions.notesList({ type: 'reset'})  // reset show that the view does not have back button
        })
    }
}

export const noteDelete = ({ uid}) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
        .remove()
        .then(() => {
            Actions.notesList({ type: 'reset'})  // reset show that the view does not have back button
        })
    }
}