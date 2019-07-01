import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-activity'

import testeHoc from '../Header/testeHoc'
import { registerClientInput, getClient } from '../../functions/fetches'
import ModalDialog from '../../Components/Dialog'
import SnackbarContent from '../../Components/SnackbarContent'
import 'react-activity/dist/react-activity.css'

import {
  ContainerData,
  ContainerButton,
  ContainerInput,
  Container,
  ContainerCpf,
  Button,
  ContainerText
} from './styles'


class Check extends Component {
  state = {
    DataClient: null,
    cpf: '',
    setOpen: false,
    openDiolog: false,
    openSnackbar: false,
    snackbar: false,
    isLoading: false,
    textErrorSnackbar: '',
    textSuccessrSnackbar: ''
  }

  handleChange = (event) => {
    this.setState({ cpf: event.target.value })
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true })
    const resp = await getClient(this.props.Auth.token, this.state.cpf)

    if (!resp.data.dataClient) {
      this.setState({
        openSnackbar: true,
        snackbar: false,
        isLoading: false,
        textErrorSnackbar: 'Cliente não encontrado.'
      })
      return
    }

    this.setState({
      DataClient: resp.data.dataClient,
      isLoading: false
    })
  }

  makeCheckIn = async () => {
    this.setState({ openDiolog: false })
    const resp = await registerClientInput(this.props.Auth.token, this.state.cpf)

    if (!resp.data.dataClient) {
      this.setState({
        openSnackbar: true,
        snackbar: false,
        cpf: '',
        textErrorSnackbar: 'Ocorreru um erro ao realizar o Check-in!.'
      })
      return
    }

    this.setState({
      DataClient: null,
      openSnackbar: true,
      snackbar: true,
      cpf: '',
      textSuccessrSnackbar: 'Check-in realizado com sucesso!.'
    })
  }

  renderCpf = () => {
    return (
      <ContainerCpf>
        <label >Cpf do cliente</label>
        <input
          placeholder={'Entre com o cpf do cliente...'}
          type='text'
          name='cpf'
          value={this.state.cpf}
          onChange={this.handleChange.bind(this)} />

        {this.state.cpf &&
          <Button
            background={'#4CAF50'}
            onClick={this.handleSubmit}
            disabled={this.state.isLoading}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 25 }} >
              <div style={{ marginRight: 20, width: 25, height: 25 }} />
              <label style={{ fontSize: 16 }}>Checar</label>
              <div style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: 25, height: 25 }}>
                {this.state.isLoading && <Spinner color={'white'} size={15} />}
              </div>
            </div>
          </Button>
        }
      </ContainerCpf>
    )
  }

  renderInput = () => {
    const { DataClient } = this.state
    if (!this.state.DataClient) return null

    return (
      <ContainerInput >
        <ContainerText>
          <label> Nome </label>
          <div>
            <label>{DataClient.name}</label>
          </div>
        </ContainerText>

        <ContainerData >
          <ContainerText>
            <label> Pago </label>
            <div>
              <label> {DataClient.pago === 'true' ? 'Sim' : 'Não'} </label>
            </div>
          </ContainerText>

          {true &&
            <ContainerText marginLeft={'10px'}>
              <label> Parcelas Restante </label>
              <div>
                <label> 3 </label>
              </div>
            </ContainerText>}

          <ContainerText marginLeft={'10px'}>
            <label> Tipo da Acomodação </label>
            <div>
              <label>{DataClient.roomType}</label>
            </div>
          </ContainerText>

          <ContainerText marginLeft={'10px'}>
            <label> Número do quarto </label>
            <div>
              <label>{DataClient.roomNumber}</label>
            </div>
          </ContainerText>
        </ContainerData>

        <ContainerButton>
          <Button
            background={'red'}
            onClick={() => this.setState({ DataClient: null, cpf: '' })}>
            Cancelar
          </Button>

          <Button
            background={'#4CAF50'}
            marginLeft={'10px'}
            onClick={() => this.setState({ openDiolog: true })}>
            Confirmar
          </Button>
        </ContainerButton>
      </ContainerInput>
    )
  }

  renderDialog = () => (
    <ModalDialog
      openDiolog={this.state.openDiolog}
      bodyText={this.state.DataClient.name}
      rejectActionDialog={() => { this.setState({ openDiolog: false }) }}
      acceptActionDialog={this.makeCheckIn}
      titleText={'Deseja realizar o check-in do(a) cliente'} />
  )

  mySnackbarContentWrapper = () => (
    <SnackbarContent
      openSnackbar={this.state.openSnackbar}
      closeSnackbar={() => this.setState({ openSnackbar: false })}
      isSnackbar={this.state.snackbar}
      textError={this.state.textErrorSnackbar}
      textSuccess={this.state.textSuccessrSnackbar} />
  )

  render() {
    return (
      <Container>
        {this.mySnackbarContentWrapper()}
        {this.state.DataClient && this.renderDialog()}
        {this.state.DataClient ? this.renderInput() : this.renderCpf()}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default testeHoc(connect(mapStateToProps, null)(Check))
