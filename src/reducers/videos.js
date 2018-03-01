import { FETCH_VIDEOS, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from '../const/action-creators'
import { VIDEOS_DEFAULT } from '../const/default-states'

export default (state = VIDEOS_DEFAULT, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_VIDEOS: {
            return Object.assign({}, state, {
                error: '',
                isFetching: true
            })
        }

        case FETCH_VIDEOS_SUCCESS: {
            return Object.assign({}, state, {
                error: '',
                data: payload.data,
                isFetching: false
            })
        }

        case FETCH_VIDEOS_FAILURE: {
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
