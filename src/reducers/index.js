import { combineReducers } from 'redux'

/* Reducers */
import videos from './videos'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    videos,
    form: formReducer
})
