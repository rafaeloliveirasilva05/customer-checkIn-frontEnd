import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-activity'

import testeHoc from '../Header/testeHoc'
import { registerClientInput, getClient } from '../../functions/fetches'
import ModalDialog from '../../Components/Dialog'
import SnackbarContent from '../../Components/SnackbarContent'
import 'react-activity/dist/react-activity.css'
import './Check.css'

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
      <div className='container-cpf'>
        <div style={{ width: '40%' }}>
          <label style={{ fontSize: 20 }}>Cpf do cliente</label>
        </div>
        <input
          placeholder={'Entre com o cpf do cliente...'}
          className='input-text-cpf'
          type='text'
          name='cpf'
          value={this.state.cpf}
          onChange={this.handleChange.bind(this)} />

        {this.state.cpf &&
          <button
            className='button-submit'
            onClick={this.handleSubmit}
            disabled={this.state.isLoading}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 25 }} >
              <div style={{ marginRight: 20, width: 25, height: 25 }} />
              <label style={{ fontSize: 16 }}>Checar</label>
              <div style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: 25, height: 25 }}>
                {this.state.isLoading && <Spinner color={'white'} size={15} />}
              </div>
            </div>
          </button>
        }
      </div>
    )
  }

  renderInput = () => {
    const { DataClient } = this.state
    if (!this.state.DataClient) return null

    return (
      <div >
        <div style={{ padding: 10, marginBottom: 10 }}>
          <label className={'text-label'}> Nome </label>
          <div className='input-text' style={{ marginTop: 10, marginBottom: 10 }}>
            <label> {DataClient.name} </label>
          </div>
        </div>

        <div style={{ flexDirection: 'row', display: 'flex' }} >
          <div style={{ width: 200, paddingLeft: 10, paddingRight: 10 }}>
            <label className={'text-label'}> Pago </label>
            <div
              className='input-text'
              style={{ marginTop: 10, marginBottom: 10 }}>
              <label> {DataClient.pago === 'true' ? 'Sim' : 'Não'} </label>
            </div>
          </div>

          {true &&
            <div style={{ marginLeft: 10, paddingLeft: 10, paddingRight: 10 }}>
              <label className={'text-label'}> Parcelas Restante </label>
              <div
                className='input-text'
                style={{ marginTop: 10, marginBottom: 10 }}>
                <label> 3 </label>
              </div>
            </div>}

          <div style={{ flex: 1, marginLeft: 10, paddingLeft: 10, paddingRight: 10 }}>
            <label className={'text-label'}> Tipo da Acomodação </label>
            <div
              className='input-text'
              style={{ marginTop: 10, marginBottom: 10 }}>
              <label>{DataClient.roomType}</label>
            </div>
          </div>

          <div style={{ marginLeft: 10, paddingLeft: 10, paddingRight: 10 }}>
            <label className={'text-label'}> Número do quarto </label>
            <div
              className='input-text'
              style={{ marginTop: 10, marginBottom: 10 }}>
              <label>{DataClient.roomNumber}</label>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 30, justifyContent: 'flex-end' }}>
          <button
            style={{ marginLeft: 10, backgroundColor: 'red' }}
            className='button-submit'
            onClick={() => this.setState({ DataClient: null, cpf: '' })}>
            Cancelar
          </button>

          <button
            style={{ marginLeft: 10, }}
            className='button-submit'
            onClick={() => this.setState({ openDiolog: true })}>
            Confirmar
          </button>
        </div>
      </div>
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
      <div className={'container'}>
        {this.mySnackbarContentWrapper()}
        {this.state.DataClient && this.renderDialog()}
        {this.state.DataClient ? this.renderInput() : this.renderCpf()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default testeHoc(connect(mapStateToProps, null)(Check))
