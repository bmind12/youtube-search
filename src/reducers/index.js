import { combineReducers } from 'redux'

/* Reducers */
import login from './login'
import videos from './videos'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    login,
    videos,
    form: formReducer
})
