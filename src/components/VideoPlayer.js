import React from 'react'
import propTypes from 'prop-types'

/* Material UI */
import Grow from 'material-ui/transitions/Grow'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'

/* Components */
import YouTubePlayer from 'react-youtube'

/* Constants */
import { VIDEO_HEIGHTS } from '../const/styles'

const styles = theme => ({
    videoDescPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
    })
})

const VideoPlayer = (props) => {
    const opts = {
        width: '100%',
        height: VIDEO_HEIGHTS[props.width]
    }

    const { videos } = props

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

VideoPlayer.propTypes = {
    classes: propTypes.object,
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
    }),
    width: propTypes.string
}

export default withStyles(styles)(withWidth()(VideoPlayer))
