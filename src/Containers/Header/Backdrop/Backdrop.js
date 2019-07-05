import React from 'react'
import { connect } from 'react-redux'
import { setIsOpenSideDrawer } from '../../../store/actions'

import { Backdrop } from './styles'

class backdrop extends React.Component {
  render() {
    return (
      <Backdrop onClick={() => this.props.setIsOpenSideDrawer(false)} />
    )
  }
}

const mapDispatchToProps = {
  setIsOpenSideDrawer
}
export default connect(null, mapDispatchToProps)(backdrop)
