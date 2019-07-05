export const setUser = (user) => {
  return{
    type: 'SET_USER',
    user
  }
}

export const setToken = (token) => {
  return{
    type: 'SET_TOKEN',
    token
  }
}

export const setIsOpenSideDrawer = (isOpenSideDrawer) => {
  return{
    type: 'SET_IS_OPEN_SIDE_DRAWER',
    isOpenSideDrawer
  }
}