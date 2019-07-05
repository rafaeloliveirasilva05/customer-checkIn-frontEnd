import React from 'react'
import { Link } from 'react-router-dom'
import { Side_drawer } from './styles'
import { connect } from 'react-redux'
import { setIsOpenSideDrawer } from '../../../store/actions'

class sideDrawer extends React.Component {
  render() {
    const drawerClasses = this.props.General.isOpenSideDrawer ? 'translateX(0)' : 'translateX(-103%)'

    return (
      <Side_drawer isOpen={drawerClasses} >
        <ul>
          <div onClick={() => this.props.setIsOpenSideDrawer(false)}>
            <Link to="/uploadData">Upload CSV</Link>
          </div>
          <div onClick={() => this.props.setIsOpenSideDrawer(false)}>
            <Link to="/sobre">Clientes</Link>
          </div>
          <div onClick={() => this.props.setIsOpenSideDrawer(false)}>
            <Link to="/check">Check-In</Link>
          </div>
          <div onClick={() => this.props.setIsOpenSideDrawer(false)}>
            <Link to="/login">Sair</Link>
          </div>
        </ul>
      </Side_drawer >
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  setIsOpenSideDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer)

