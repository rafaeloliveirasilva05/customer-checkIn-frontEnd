export const INITIAL_STATE = {
  user: null,
  token: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    default:
      return state
  }
}