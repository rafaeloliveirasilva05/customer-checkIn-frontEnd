import React, { Component } from 'react'
import filesize from 'filesize'
import { connect } from 'react-redux'
import Papa from 'papaparse'

import { Container, Content } from './styles'
import api from '../../services/api'
import Upload from '../../Components/upload'
import testeHoc from '../Header/testeHoc'
import FileList from '../../Components/FileList'

class UploadData extends Component {
  state = {
    uploadedFiles: null
  }

  handleUpload = files => {
    const file = files[0]

    Papa.parse(file, {
      complete: (result) => {
        const uploadedFiles = {
          data: result.data,
          name: file.name,
          readableSize: filesize(file.size),
          uploaded: false,
          error: false
        }

        this.setState({ uploadedFiles })
        this.processUpload(uploadedFiles)
      },
      header: true
    })
  }

  updateFile = (data) => {
    this.setState({ uploadedFiles: { ...this.state.uploadedFiles, ...data } })
  }

  processUpload = (uploadedFile) => {
    api.post('/client/saveClientsDataJson',
      { data: uploadedFile.data },
      { headers: { authorization: `Bearer ${this.props.Auth.token}` } })
      .then(() => {
        this.updateFile({ uploaded: true })
      })
      .catch(() => {
        this.updateFile({ error: true })
      })
  }

  render() {
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!this.state.uploadedFiles && <FileList file={this.state.uploadedFiles} />}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default testeHoc(connect(mapStateToProps, null)(UploadData))
