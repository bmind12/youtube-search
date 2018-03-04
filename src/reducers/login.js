import { VALIDATE_TOKEN, VALIDATE_TOKEN_FAILURE, VALIDATE_TOKEN_SUCCESS } from '../const/action-creators'
import { LOGIN } from '../const/default-states'

export default (state = LOGIN, action) => {
    const { type, payload } = action

    switch (type) {
        case VALIDATE_TOKEN: {
            return Object.assign({}, state, {
                accessToken: payload.accessToken
            })
        }

        case VALIDATE_TOKEN_SUCCESS: {
            return Object.assign({}, state, {
                isValid: true
            })
        }

        case VALIDATE_TOKEN_FAILURE: {
            return Object.assign({}, state, {
                isValid: false,
                errorMessage: payload.errorMessage
            })
        }

        default: {
            return state
        }
    }
}
