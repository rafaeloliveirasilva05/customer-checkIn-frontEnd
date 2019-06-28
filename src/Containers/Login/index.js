import React, { Component } from 'react'

import GlobalStyle from '../../Components/styles/global'
import { userAuthentication } from '../../functions/fetches'
import { connect } from 'react-redux'
import { setUser, setToken } from '../../store/actions'

import './login.css'


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: 'rafael@email.com',
      password: '123456'
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  submitLoginData = async () => {
    const resp = await userAuthentication({
      email: this.state.login,
      password: this.state.password
    })

    if (resp) {
      const { user, token } = resp.data
      this.props.setUser(user)
      this.props.setToken(token)
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className='containerLogin'>

        <div className='containerName'>
          <label>Login</label>
          <input
            className='inputText'
            name='login'
            value={this.state.login}
            onChange={this.handleInputChange} />
        </div>

        <div className='containerName'>
          <label >Senha</label>
          <input
            className='inputText'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange} />
        </div>

        <button
          className='button-login'
          onClick={this.submitLoginData}>
          Logar
        </button>

        <GlobalStyle />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  // simpleAction: () => dispatch(simpleAction())
  setUser,
  setToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
