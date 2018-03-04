import {
    CHANGE_CURRENT_VIDEO,
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAILURE,
    FETCH_VIDEOS_SUCCESS,
    RATE_VIDEO,
    RATE_VIDEO_FAILURE,
    RATE_VIDEO_SUCCESS
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
                data: [],
                errorMessage: '',
                isFetching: true,
                totalResults: null
            })
        }

        case FETCH_VIDEOS_SUCCESS: {
            return Object.assign({}, state, {
                data: payload.data,
                errorMessage: '',
                isFetching: false,
                totalResults: payload.totalResults
            })
        }

        case FETCH_VIDEOS_FAILURE: {
            return Object.assign({}, state, {
                data: [],
                errorMessage: payload.errorMessage,
                isFetching: false,
                totalResults: null
            })
        }

        case RATE_VIDEO: {
            return Object.assign({}, state, {
                ...state,
                activeVideo: {
                    ...state.activeVideo,
                    rateError: '',
                    isRated: false,
                    rating: null
                }
            })
        }

        case RATE_VIDEO_SUCCESS: {
            return Object.assign({}, state, {
                ...state,
                activeVideo: {
                    ...state.activeVideo,
                    rateError: '',
                    isRated: true,
                    rating: payload.rating
                }
            })
        }

        case RATE_VIDEO_FAILURE: {
            return Object.assign({}, state, {
                ...state,
                activeVideo: {
                    ...state.activeVideo,
                    isRated: false,
                    rateError: 'Cannot rate video',
                    rating: null
                }
            })
        }

        default: {
            return state
        }
    }
}
