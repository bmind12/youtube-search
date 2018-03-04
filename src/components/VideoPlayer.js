import React from 'react'
import propTypes from 'prop-types'

/* Components */
import YouTubePlayer from 'react-youtube'

/* Constants */
import { VIDEO_HEIGHTS } from '../const/styles'

/* Material UI */
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Grow from 'material-ui/transitions/Grow'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'

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

    const {
        rating,
        videos
    } = props

    const renderButtons = () => {
        if (rating) {
            return (
                <Grow in={true}>
                    <Grid container spacing={24} >
                        <Grid item xs={6} >
                            <Button color="primary" variant="raised" >Like</Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Button color="primary" variant="raised" >Dislike</Button>
                        </Grid>
                    </Grid>
                </Grow>
            )
        }
    }

    return (
        <div>
            <YouTubePlayer
                videoId={videos.activeVideo.id}
                opts={opts}
            />
            { renderButtons() }
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
    rating: propTypes.bool,
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
