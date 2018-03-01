import {
    CHANGE_CURRENT_VIDEO,
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAILURE,
    FETCH_VIDEOS_SUCCESS
} from '../const/action-creators'
import { VIDEOS_DEFAULT } from '../const/default-states'

export default (state = VIDEOS_DEFAULT, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_CURRENT_VIDEO: {
            return Object.assign({}, state, {
                activeVideoId: payload.activeVideoId
            })
        }

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
