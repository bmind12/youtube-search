import axios from 'axios'
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../const/action-creators'
import { ENDPOINTS, PARAMETERS } from '../const/api'

export const searchVideos = ({ query }) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH
        })

        const api = ENDPOINTS.YOUTUBE_VIDEOS

        const config = {
            params: {
                part: PARAMETERS.PART,
                q: query,
                type: PARAMETERS.TYPE
            }
        }

        axios.get(api, config)
            .then((response) => {
                debugger;
                dispatch({
                    type: SEARCH_SUCCESS,
                    payload: {
                        videos: response.data
                    }
                })
            })
            .catch((error) => {
                debugger;
                dispatch({
                    type: SEARCH_FAILURE,
                    payload: {
                        error: error.message
                    }
                })
            });
    };
}
