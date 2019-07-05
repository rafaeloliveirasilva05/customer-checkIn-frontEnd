import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsOpenSideDrawer } from '../../../store/actions'

import {
  ToolbarHeader,
  Toolbar__navigation,
  Toolbar__logo,
  Toolbar__navigation_items,
  Spacer
} from './styles'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton'

class toolbar extends React.Component {
  render() {
    return (
      <ToolbarHeader>
        <Toolbar__navigation>
          <div>
            <DrawerToggleButton click={() => this.props.setIsOpenSideDrawer(true)} />
          </div>
          <Toolbar__logo>
            <div><Link to="/">Logo CM</Link></div>
          </Toolbar__logo>
          <Spacer />
          <Toolbar__navigation_items>
            <ul>
              <div><Link to="/uploadData">Upload CSV</Link></div>
              <div><Link to="/sobre">Clientes</Link></div>
              <div><Link to="/check">Check-In</Link></div>
              <div><Link to="/login">Sair</Link></div>
            </ul>
          </Toolbar__navigation_items>
        </Toolbar__navigation>
      </ToolbarHeader>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})


const mapDispatchToProps = {
  setIsOpenSideDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar)
