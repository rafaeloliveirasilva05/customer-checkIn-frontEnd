import React, { Component } from 'react'
import DropZone from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles'

export default class Upload extends Component {

  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste seu CSV aqui ...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type='success'>Solte o CSV aqui</UploadMessage>
  }

  render() {

    return (
      <DropZone accept='text/csv' onDropAccepted={this.props.onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            multiple={false}
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >

            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </DropZone>
    )
  }
}