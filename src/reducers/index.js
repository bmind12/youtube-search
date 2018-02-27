import { combineReducers } from 'redux'

/* Reducers */
import check from './check'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    check,
    form: formReducer
})
