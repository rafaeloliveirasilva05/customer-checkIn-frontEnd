export const INITIAL_STATE = {
  isOpenSiderDrawer: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_OPEN_SIDE_DRAWER':
      return {
        ...state,
        isOpenSideDrawer: action.isOpenSideDrawer
      }

    default: 
      return state
  }
}

