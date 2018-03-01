import React from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../AC/videos'

/* Components */
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Search from './Search'
import VideoList from './VideoList'
import YouTubePlayer from 'react-youtube'

const App = ({ classes, searchVideos, videos }) => {

    const renderVideoList = () => {
        if (videos.data.length > 0) {
            return (
                <Grid item xs={12} md={4}>
                    <Paper>
                        <VideoList data={videos.data} />
                    </Paper>
                </Grid>
            )
        } else if (videos.isFetching) {
            return (
                <CircularProgress />
            )
        } else {
            return null
        }
    }

    const renderVideoPlayer = () => {
        const videoId = videos.data[0] && videos.data[0].id.videoId

        return (
            <Grid item xs={12} md={8}>
                <YouTubePlayer
                    videoId={videoId}
                />
            </Grid>
        )
    }

    return (
        <div>
            <Search onSubmit={searchVideos} />
            <Grid container spacing={24}>
                {renderVideoPlayer()}
                {renderVideoList()}
            </Grid>
        </div>
    )
}

export default connect(({ videos }) => ({
    videos
}), {
    searchVideos
})(App)
