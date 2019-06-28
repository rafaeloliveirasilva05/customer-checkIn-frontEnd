import React from 'react'
import { MdCheckCircle, MdError } from 'react-icons/md'
import { Spinner } from 'react-activity'
import 'react-activity/dist/react-activity.css'

import { Container, FileInfo, Preview } from './styles'

const FileList = ({ file }) => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://images.ctfassets.net/3n0fku9d0jjr/1caC38kuhK8WusWKQGIeAO/6a35483a56960b0ff258e5c6acb9c0d7/csv-autofetch.svg" />
          <div>
            <strong>{file.name}</strong>
            <span>
              {file.readableSize}
            </span>
          </div>
        </FileInfo>
        <div>
          {!file.uploaded && !file.error && <Spinner />}
          {file.uploaded && <MdCheckCircle size={24} color='#78e5d5' />}
          {file.error && <MdError size={24} color='#e57878' />}
        </div>
      </li>
    </Container>
  )
}

export default FileList
