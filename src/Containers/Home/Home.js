import React, { Component } from 'react'

import testeHoc from '../Header/testeHoc'
class Home extends Component {

  state = {
    uploadedFiles: []
  }

  render() {
    return (
      <div>
        <label>oi</label>
      </div>
    )
  }
}

export default testeHoc(Home)
