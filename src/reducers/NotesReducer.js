import { 
    ADD_NOTE,
    NOTES_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
    name:'',
    notes: ''
}

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case NOTES_FETCH_SUCCESS:
            return action.payload
        case ADD_NOTE:
            return INITIAL_STATE
        default:
            return state
    }
}