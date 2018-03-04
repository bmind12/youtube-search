import axios from 'axios'
import {
    CHANGE_CURRENT_VIDEO,
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAILURE,
    FETCH_VIDEOS_SUCCESS,
    RATE_VIDEO,
    RATE_VIDEO_FAILURE,
    RATE_VIDEO_SUCCESS
} from '../const/action-creators'
import { ENDPOINTS, PARAMETERS } from '../const/api'

export const changeCurrentVideo = (activeVideoId, activeVideoTitle, activeVideoDesc) => {
    return {
        type: CHANGE_CURRENT_VIDEO,
        payload: {
            activeVideoId,
            activeVideoTitle,
            activeVideoDesc
        }
    }
}

export const rateVideo = (videoId, rating, token) => {
    return (dispatch) => {
        dispatch({
            type: RATE_VIDEO
        })

        const api = `${ENDPOINTS.VIDEO_RATING}?id=${videoId}&rating=${rating}&key=${token}`

        const request = axios.create({
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        request.post(api)
            .then((response) => {
                dispatch({
                    type: RATE_VIDEO_SUCCESS,
                    payload: {
                        rating
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: RATE_VIDEO_FAILURE
                })
            })
    }
}

export const searchVideos = ({ query }) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_VIDEOS
        })

        const api = ENDPOINTS.YOUTUBE_VIDEOS

        const {
            KEY: key,
            MAX_RESULTS: maxResults,
            PART: part,
            TYPE_VIDEO: type
        } = PARAMETERS

        const config = {
            params: {
                key,
                maxResults,
                part,
                q: query,
                type
            }
        }

        axios.get(api, config)
            .then((response) => {
                const { items, pageInfo } = response.data

                dispatch({
                    type: FETCH_VIDEOS_SUCCESS,
                    payload: {
                        data: items,
                        totalResults: pageInfo.totalResults
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_VIDEOS_FAILURE,
                    payload: {
                        errorMessage: error.message
                    }
                })
            })
    };
}
