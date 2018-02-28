import React from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../AC/videos'

/* Components */
import { CircularProgress } from 'material-ui/Progress';
import Search from './Search'
import VideoList from './VideoList'

const App = ({ searchVideos, videos }) =>
    <div>
        <Search onSubmit={searchVideos} />
        {videos.isFetching
            ? <CircularProgress />
            : <VideoList data={videos.data} />
        }
    </div>

export default connect(({ videos }) => ({
    videos
}), {
    searchVideos
})(App)
