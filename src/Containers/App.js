import React, { Component } from 'react'
import Navigation from './Navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import GlobalStyles from './Styles/global'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div style={{ }}>
        <Navigation props={this.props} />
        <GlobalStyles />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(App)
