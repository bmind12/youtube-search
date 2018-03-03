import axios from 'axios'
import {
    CHANGE_CURRENT_VIDEO,
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAILURE,
    FETCH_VIDEOS_SUCCESS
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
                dispatch({
                    type: FETCH_VIDEOS_SUCCESS,
                    payload: {
                        data: response.data.items
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
            });
    };
}
