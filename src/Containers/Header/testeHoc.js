import React from 'react'
import Header from './Header'
import Toolbar from './Toolbar/Toolbar'


const withHeader = (OriginalComponent) => {
  return class extends React.Component {

    render() {
      return (
        <div>
          <Toolbar />
          <OriginalComponent />
        </div>
      )
    }
  }
}

export default withHeader