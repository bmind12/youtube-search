import axios from 'axios'
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../const/action-creators'
import { ENDPOINTS, PARAMETERS } from '../const/api'

export const searchVideos = ({ query }) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH
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
                    type: SEARCH_SUCCESS,
                    payload: {
                        data: response.data.items
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: SEARCH_FAILURE,
                    payload: {
                        error: error.message
                    }
                })
            });
    };
}
