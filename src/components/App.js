import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../AC/search'

/* Components */
import Search from './Search'

const App = props =>
            <div>
        <Search onSubmit={props.searchVideos} />
            </div>

export default connect(({ check }) => ({
    check
}), {
    searchVideos
})(App)
