import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentVideo, searchVideos } from '../AC/videos'
import withWidth from 'material-ui/utils/withWidth'

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
                <Typography variant="title" gutterBottom>
                    {videos.activeVideo.title}
                </Typography>
                <Typography variant="caption" paragraph>
                    {videos.activeVideo.desc}
                </Typography>
            </div>
        )
    }

    const renderVideoList = () => {
        const { changeCurrentVideo, videos } = props

        if (videos.data.length > 0) {
            return (
                <VideoList data={videos.data} changeCurrentVideo={changeCurrentVideo} />
            )
        } else if (videos.isFetching) {
            return (
                <CircularProgress />
            )
        } else {
            return null
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
            <Grid item xs={12} md={4}>
                <Paper>
                    {renderVideoList()}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withWidth()(connect(({ videos }) => ({
    videos
}), {
    changeCurrentVideo,
    searchVideos
})(App))
