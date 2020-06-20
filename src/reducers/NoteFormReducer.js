import { 
    ADD_NOTE,
    NOTE_SAVE_SUCCESS,
    NOTE_UPDATE,
    CLEAR_FORM
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    details: ''
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case NOTE_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case ADD_NOTE:
            return INITIAL_STATE
        case NOTE_SAVE_SUCCESS:
            return INITIAL_STATE
        case CLEAR_FORM:
            return INITIAL_STATE
        default :
            return state
    }
}