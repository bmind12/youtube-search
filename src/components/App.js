import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../AC/search'

/* Components */
import Search from './Search'

class App extends PureComponent {
    handleClick = () => {
        this.props.runCheck('success')
    }

    render() {
        return (
            <div>
                <Search />
            </div>
        )
    }
}

export default connect(({ check }) => ({
    check
}), {
    searchVideos
})(App)
