import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../AC/videos'

/* Components */
import Search from './Search'

const App = props =>
    <div>
        <Search onSubmit={props.searchVideos} />
    </div>

export default connect(({ videos }) => ({
    videos
}), {
    searchVideos
})(App)
