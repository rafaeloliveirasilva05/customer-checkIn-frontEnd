import React from 'react'
import Header from './Header'

const withHeader = (OriginalComponent) => {
  return class extends React.Component {

    render() {
      return (
        <div>
          <Header />
          <OriginalComponent />
        </div>
      )
    }
  }
}

export default withHeader