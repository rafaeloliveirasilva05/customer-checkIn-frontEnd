import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-activity'

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
  ContainerText,
  Label,
  LabelCpf
} from './styles'


class Check extends Component {
  state = {
    DataClient: null,
    cpf: '203777818',
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

    this.setState({ isLoading: false })

    if (resp.data.dataClient.presenceRecord) {
      setTimeout(() => {
        alert(`\nATENÇÃO \n\n${resp.data.dataClient.name} \njá realizou check-in.`) // eslint-disable-line no-undef
      }, 100)
      return
    }

    if (!resp.data.dataClient) {
      this.setState({
        openSnackbar: true,
        snackbar: false,
        textErrorSnackbar: 'Cliente não encontrado.'
      })
      return
    }

    this.setState({ DataClient: resp.data.dataClient })
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
        <LabelCpf >Cpf do cliente</LabelCpf>
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
          <Label> Nome </Label>
          <div>
            <label>{DataClient.name}</label>
          </div>
        </ContainerText>

        <ContainerData >
          <ContainerText>
            <Label> Pago </Label>
            <div>
              <label> {DataClient.pago === 'true' ? 'Sim' : 'Não'} </label>
            </div>
          </ContainerText>

          {true &&
            <ContainerText marginLeft={'10px'}>
              <Label> Parcelas Restante </Label>
              <div>
                <label> 3 </label>
              </div>
            </ContainerText>}

          <ContainerText marginLeft={'10px'}>
            <Label> Tipo da Acomodação </Label>
            <div>
              <label>{DataClient.roomType}</label>
            </div>
          </ContainerText>

          <ContainerText marginLeft={'10px'}>
            <Label> Número do quarto </Label>
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
            onClick={() => this.modalAlert(
              'Deseja realizar o check-in do(a) cliente',
              this.state.DataClient.name)
            }>
            Confirmar
          </Button>

        </ContainerButton>
      </ContainerInput>
    )
  }

  modalAlert = (title, desc, onPress = () => { }) => {
    if (window.confirm(`${title}\n\n${desc} ?`)) {
      this.makeCheckIn()
    }
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

export default connect(mapStateToProps, null)(Check)
