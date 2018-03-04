import axios from 'axios'
import { VALIDATE_TOKEN, VALIDATE_TOKEN_FAILURE, VALIDATE_TOKEN_SUCCESS } from '../const/action-creators'
import { ENDPOINTS } from '../const/api'

export const validateToken = (token) => {
    return (dispatch) => {
        dispatch({
            type: VALIDATE_TOKEN,
            payload: {
                accessToken: token
            }
        })

        const api = ENDPOINTS.VALIDATE_TOKEN

        const config = {
            params: {
                access_token: token
            }
        }

        axios.get(api, config)
            .then((response) => {
                dispatch({
                    type: VALIDATE_TOKEN_SUCCESS
                })
            })
            .catch((error) => {
                dispatch({
                    type: VALIDATE_TOKEN_FAILURE,
                    payload: {
                        errorMessage: error.message
                    }
                })
            });
    };
}
