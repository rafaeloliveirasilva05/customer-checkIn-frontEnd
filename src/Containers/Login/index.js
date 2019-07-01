import React, { Component } from 'react'

import { userAuthentication } from '../../functions/fetches'
import { connect } from 'react-redux'
import { setUser, setToken } from '../../store/actions'

import './login.css'
import { Container, ContainerName, InputText, SubmitButton } from './styles'


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
      <Container>
        <ContainerName>
          <label>Login</label>
          <InputText
            value={this.state.login}
            onChange={this.handleInputChange} />
        </ContainerName>

        <ContainerName>
          <label>Senha</label>
          <InputText
            value={this.state.password}
            onChange={this.handleInputChange} />
        </ContainerName>

        <SubmitButton
          onClick={this.submitLoginData}>
          Logar
        </SubmitButton>
      </Container>
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
