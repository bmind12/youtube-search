import { combineReducers } from 'redux'

/* Reducers */
import search from './search'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    search,
    form: formReducer
})
