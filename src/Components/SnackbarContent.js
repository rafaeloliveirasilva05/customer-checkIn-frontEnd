import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import styled from 'styled-components'

const SnackbarSuccess = styled.div`
  background-color: ${props => props.backgrouncolor};
  margin-top: 100px;
  color: white;
  padding: 20px 60px;
  border-radius: 4px;
`

const SnackbarContent = ({ openSnackbar, closeSnackbar, isSnackbar, textError, textSuccess }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={openSnackbar}
    autoHideDuration={3000}
    onClose={closeSnackbar}>
    <div>
      {isSnackbar ?
        <SnackbarSuccess backgrouncolor={'#4CAF50'}>
          <label>{textSuccess}</label>
        </SnackbarSuccess>
        :
        <SnackbarSuccess backgrouncolor={'red'}>
          <label>{textError}</label>
        </SnackbarSuccess>
      }
    </div>
  </Snackbar>
)

export default SnackbarContent