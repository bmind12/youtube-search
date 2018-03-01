import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentVideo, searchVideos } from '../AC/videos'

/* Components */
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Search from './Search'
import VideoList from './VideoList'
import YouTubePlayer from 'react-youtube'

const App = (props) => {

    const { videos } = props

    const renderVideoList = () => {
        if (videos.data.length > 0) {
            return (
                <Grid item xs={12} md={4}>
                    <Paper>
                        <VideoList data={videos.data} changeCurrentVideo={props.changeCurrentVideo} />
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

    return (
        <div>
            <Search onSubmit={props.searchVideos} />
            <Grid container spacing={24}>
                <Grid item xs={12} md={8}>
                    <YouTubePlayer
                        videoId={videos.activeVideoId}
                    />
                </Grid>
                {renderVideoList()}
            </Grid>
        </div>
    )
}

export default connect(({ videos }) => ({
    videos
}), {
    changeCurrentVideo,
    searchVideos
})(App)
