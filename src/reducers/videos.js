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
                ...state,
                activeVideo: {
                    id: payload.activeVideoId,
                    title: payload.activeVideoTitle,
                    desc: payload.activeVideoDesc
                }
            })
        }

        case FETCH_VIDEOS: {
            return Object.assign({}, state, {
                errorMessage: '',
                data: [],
                isFetching: true,
                totalResults: null
            })
        }

        case FETCH_VIDEOS_SUCCESS: {
            return Object.assign({}, state, {
                error: '',
                data: payload.data,
                isFetching: false,
                totalResults: payload.totalResults
            })
        }

        case FETCH_VIDEOS_FAILURE: {
            return Object.assign({}, state, {
                errorMessage: payload.errorMessage,
                data: [],
                isFetching: false,
                totalResults: null
            })
        }

        default: {
            return state
        }
    }
}
