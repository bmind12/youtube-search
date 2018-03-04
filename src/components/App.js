import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCurrentVideo, searchVideos } from '../AC/videos'
import { validateToken } from '../AC/login'
import GoogleLogin from 'react-google-login'

/* Components */
import Search from './Search'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'

/* Material UI */
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    sidebar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16
    }),
    spinner: {
        height: '100%'
    },
    login: {
        cursor: 'pointer'
    }
})

const App = (props) => {
    const renderVideoList = () => {
        const { changeCurrentVideo, classes, videos } = props
        const { data, errorMessage, isFetching, totalResults } = videos

        if (totalResults > 0) {
            return <VideoList data={data} changeCurrentVideo={changeCurrentVideo} />
        } else if (totalResults === 0) {
            return (
                <Paper className={classes.sidebar}>
                    <Typography color="secondary" component="p" variant="subheading">
                        No videos found
                    </Typography>
                </Paper>
            )
        } else if (isFetching) {
            return (
                <Grid
                    alignItems="center"
                    className={classes.spinner}
                    container
                    direction="column"
                    justify="center"
                >
                    <CircularProgress />
                </Grid>
            )
        } else if (errorMessage) {
            return (
                <Paper className={classes.sidebar}>
                    <Typography color="secondary" component="p" variant="subheading">
                        {errorMessage}
                    </Typography>
                </Paper>
            )
        }
    }

    const handleLogin = (response) => {
        props.validateToken(response.accessToken)
    }

    return (
        <Grid container spacing={24} >
            <Grid item xs={12} >
                <Grid container justify="space-between" >
                    <Grid item xs={10} >
                        <Search onSubmit={props.searchVideos} />
                    </Grid>
                    <Grid item xs={2} >
                        <GoogleLogin
                            className={props.classes.login}
                            clientId="523329881214-f6pvj8d3k4pd03tkbcsn84jl524hqn7f.apps.googleusercontent.com"
                            buttonText="Ugly Login Button"
                            onSuccess={handleLogin}
                            onFailure={handleLogin}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={8} >
                <VideoPlayer videos={props.videos} />
            </Grid>
            <Grid item xs={12} sm={8} md={4} >
                {renderVideoList()}
            </Grid>
        </Grid>
    )
}

App.propTypes = {
    changeCurrentVideo: propTypes.func.isRequired,
    classes: propTypes.object,
    searchVideos: propTypes.func.isRequired,
    login: propTypes.shape({
        accessToken: propTypes.string,
        isValid: propTypes.bool.isRequired,
        errorMessage: propTypes.string
    }),
    videos: propTypes.shape({
        activeVideo: propTypes.shape({
            id: propTypes.string.isRequired,
            title: propTypes.string,
            desc: propTypes.string
        }),
        data: propTypes.array,
        errorMessage: propTypes.string,
        isFetching: propTypes.bool,
        totalResults: propTypes.number
    })
}

export default withStyles(styles)(
    connect(({ login, videos }) => ({
        login,
        videos
    }), {
        changeCurrentVideo,
        searchVideos,
        validateToken
    })(App)
)
