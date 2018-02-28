import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../const/action-creators'
import { VIDEOS_DEFAULT } from '../const/default-states'

export default (state = VIDEOS_DEFAULT, action) => {
    const { type, payload } = action

    switch (type) {
        case SEARCH: {
            return Object.assign({}, state, {
                error: '',
                isFetching: true
            })
        }

        case SEARCH_SUCCESS: {
            return Object.assign({}, state, {
                error: '',
                data: payload.data,
                isFetching: false
            })
        }

        case SEARCH_FAILURE: {
            return Object.assign({}, state, {
                error: payload.errorMessage,
                data: [],
                isFetching: false
            })
        }

        default: {
            return state
        }
    }
}
