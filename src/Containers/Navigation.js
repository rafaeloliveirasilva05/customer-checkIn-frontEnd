import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home/Home'
import UploadData from './UploadData/UploadData'
import Sobre from './Sobre/Sobre'
import Check from './CheckIn/Check'
import Login from './Login'

import Toolbar from './Header/Toolbar/Toolbar'

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticate()
      ?
      <div>
        <Toolbar />
        <Component {...props} />
      </div>
      :
      <Redirect to={{ pathname: 'Login', state: { from: props.location } }} />
    }
  />
)

class Navigation extends Component {
  isAuthenticate = () => {
    if (this.props.Auth.token)
      return true
    return true
  }

  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute exact path='/' component={Home} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path='/uploadData' component={UploadData} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path="/sobre" component={Sobre} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path="/check" component={Check} isAuthenticate={this.isAuthenticate} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Navigation)
