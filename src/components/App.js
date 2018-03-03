import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentVideo, searchVideos } from '../AC/videos'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import Grow from 'material-ui/transitions/Grow'

/* Components */
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Search from './Search'
import Typography from 'material-ui/Typography'
import VideoList from './VideoList'
import YouTubePlayer from 'react-youtube'

/* Constants */
import { VIDEO_HEIGHTS } from '../const/styles'

const styles = theme => ({
    videoDescPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
    }),
    errorPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16
    }),
    spinner: {
        height: '100%'
    }
});

const App = (props) => {

    const renderPlayer = () => {
        const { videos } = props
        const opts = {
            width: '100%',
            height: VIDEO_HEIGHTS[props.width]
        }

        return (
            <div>
                <YouTubePlayer
                    videoId={videos.activeVideo.id}
                    opts={opts}
                />
                <Grow in={true}>
                    <Paper className={props.classes.videoDescPaper}>
                        <Typography component="h1" gutterBottom variant="title">
                            {videos.activeVideo.title}
                        </Typography>
                        <Typography component="p" paragraph variant="caption">
                            {videos.activeVideo.desc}
                        </Typography>
                    </Paper>
                </Grow>
            </div>
        )
    }

    const renderVideoList = () => {
        const { changeCurrentVideo, classes, videos } = props
        const { data, errorMessage, isFetching } = videos

        if (data.length > 0 && !isFetching) {
            return <VideoList data={data} changeCurrentVideo={changeCurrentVideo} />
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
                <Paper className={classes.errorPaper}>
                    <Typography color="secondary" component="p" variant="subheading">
                        {errorMessage}
                    </Typography>
                </Paper>
            )
        }
    }

    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Search onSubmit={props.searchVideos} />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
                {renderPlayer()}
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                {renderVideoList()}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(
    withWidth()(
        connect(({ videos }) => ({
            videos
        }), {
            changeCurrentVideo,
            searchVideos
        })(App)
    )
)
