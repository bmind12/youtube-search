import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { runCheck } from '../AC/check'

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
    runCheck
})(App)
