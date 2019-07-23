
import api from '../services/api'

const modalAlert = (title, desc, onPress = () => { }) => {
  alert(`${title}\n${desc}`) // eslint-disable-line no-undef
  onPress()
}

const errorHandling = (dataError) => {
  let messagem = 'Algum erro ocorreu, tente novamente mais tarde'

  if (dataError.response.status === 401) {
    messagem = 'Verifique login e senha'
  } else if (dataError.response.status === 400) {
    messagem = 'Erro'
  }

  modalAlert('Aviso', messagem)
}

const userAuthentication = async ({ email, password }) => {
  try {
    const response = await api.post('auth/authenticate', { email, password })
    return response

  } catch (error) {
    errorHandling(error)
  }
}

const getClients = async (token, numberPage, rowsPerPage) => {
  try {
    const response = await api.get(`client/listClients?numberPage=${numberPage}&rowsPerPage=${rowsPerPage}`, { headers: { authorization: `Bearer ${token}` } })
    return response

  } catch (error) {
    errorHandling(error)
  }
}

const getClient = async (token, cpf) => {
  try {
    const response = await api.get(`client/getClient/${cpf}`, { headers: { authorization: `Bearer ${token}` } })
    return response

  } catch (error) {
    errorHandling(error)
  }
}

const registerClientInput = async (token, cpf) => {
  try {
    const response = await api.patch(`/client/checkIn/${cpf}`,
      { presenceRecord: true },
      { headers: { authorization: `Bearer ${token}` } })
    return response

  } catch (error) {
    errorHandling(error)
  }
}

const showCustomerInputData = async (token) => {
  try {
    const response = await api.get('client/presenceData')
    return response

  } catch (error) {
    errorHandling(error)
  }
}

export {
  userAuthentication,
  getClients,
  getClient,
  registerClientInput,
  showCustomerInputData
}