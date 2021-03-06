import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import NoteFormReducer from './NoteFormReducer'
import NotesReducer from './NotesReducer'
 
export default combineReducers({
    auth: AuthReducer,
    noteForm: NoteFormReducer,
    notes: NotesReducer
});
