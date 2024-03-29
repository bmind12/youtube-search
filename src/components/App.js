import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCurrentVideo, rateVideo, searchVideos } from '../AC/videos'
import { validateToken } from '../AC/login'

/* Components */
import Login from './Login'
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
    }
})

const App = (props) => {
    const {
        changeCurrentVideo,
        classes,
        login,
        rateVideo,
        searchVideos,
        validateToken,
        videos
    } = props

    const renderVideoList = () => {
        const {
            data,
            errorMessage,
            isFetching,
            totalResults
        } = videos

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

    return (
        <Grid container spacing={24} >
            <Grid item xs={12} >
                <Grid container justify="space-between" >
                    <Grid item xs={10} >
                        <Search onSubmit={searchVideos} />
                    </Grid>
                    <Grid item xs={2} >
                        <Login validateToken={validateToken}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={8} >
                <VideoPlayer
                    isLoggedIn={login.isValid}
                    rating={videos.activeVideo.rating}
                    rateVideo={rateVideo}
                    token={login.accessToken}
                    videos={videos}
                />
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
    login: propTypes.shape({
        accessToken: propTypes.string,
        isValid: propTypes.bool.isRequired,
        errorMessage: propTypes.string
    }),
    rateVideo: propTypes.func.isRequired,
    searchVideos: propTypes.func.isRequired,
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
        rateVideo,
        searchVideos,
        validateToken
    })(App)
)
