import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home/Home'
import UploadData from './UploadData/UploadData'
import Sobre from './Sobre/Sobre'
import Check from './CheckIn/Check'
import Login from './Login'

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticate()
      ?
      <Component {...props} />
      :
      <Redirect to={{ pathname: 'Login', state: { from: props.location } }} />
    }
  />
)

class Navigation extends Component {
  isAuthenticate = () => {
    if (this.props.Auth.token)
      return true
    return false
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route path='/uploadData' component={UploadData}  />
          <Route path="/sobre" component={Sobre}  />
          <Route path="/check" component={Check}  />
          <Route path="/login" component={Login} />
        </Switch>
        {/* <Switch>
          <PrivateRoute exact path='/' component={Home} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path='/uploadData' component={UploadData} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path="/sobre" component={Sobre} isAuthenticate={this.isAuthenticate} />
          <PrivateRoute path="/check" component={Check} isAuthenticate={this.isAuthenticate} />
          <Route path="/login" component={Login} />
        </Switch> */}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Navigation)
