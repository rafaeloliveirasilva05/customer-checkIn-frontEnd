import { combineReducers } from 'redux'

import Auth from './Auth'
import General from './General'

export default combineReducers({
  Auth,
  General
})