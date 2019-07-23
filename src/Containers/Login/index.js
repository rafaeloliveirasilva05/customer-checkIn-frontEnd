import React, { Component } from 'react'

import { userAuthentication } from '../../functions/fetches'
import { connect } from 'react-redux'
import { setUser, setToken } from '../../store/actions'
import { Spinner } from 'react-activity'

import './login.css'
import { Container, ContainerName, InputText, SubmitButton } from './styles'


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: 'rafael@email.com',
      password: '123456',
      isLoading: false
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  submitLoginData = async () => {
    this.setState({isLoading: true})
    const resp = await userAuthentication({
      email: this.state.login,
      password: this.state.password
    })

    this.setState({isLoading: false})

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
        <ContainerName style={{ marginBottom: '18px' }}>
          <label>Usuário</label>
          <InputText
            name='login'
            value={this.state.login}
            onChange={this.handleInputChange} />
        </ContainerName>

        <ContainerName>
          <label>Senha</label>
          <InputText
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange} />
        </ContainerName>

        <SubmitButton
          background={'#4CAF50'}
          onClick={this.submitLoginData}
          disabled={this.state.isLoading}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 25 }} >
            <div style={{ marginRight: 20, width: 25, height: 25 }} />
            <label style={{ fontSize: 16 }}>Entrar</label>
            <div style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: 25, height: 25 }}>
              {this.state.isLoading && <Spinner color={'white'} size={15} />}
            </div>
          </div>
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
