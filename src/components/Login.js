import React from 'react'
import propTypes from 'prop-types'
import GoogleLogin from 'react-google-login'

/* Constants */
import { CLIENT } from '../const/api'

/* Material UI */
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    login: {
        cursor: 'pointer'
    }
})

const Login = (props) => {

    const handleLogin = (response) => {
        props.validateToken(response.accessToken)
    }

    return (
        <GoogleLogin
            className={props.classes.login}
            clientId={CLIENT.ID}
            buttonText="Ugly Login Button"
            onSuccess={handleLogin}
            onFailure={handleLogin}
        />
    )
}

Login.propTypes = {
    classes: propTypes.object,
    validateToken: propTypes.func.isRequired
}

export default withStyles(styles)(Login)
