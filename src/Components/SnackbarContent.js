import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

const SnackbarContent = ({ openSnackbar, closeSnackbar, isSnackbar, textError, textSuccess }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={openSnackbar}
    autoHideDuration={3000}
    onClose={closeSnackbar}>
    <div>
      {isSnackbar ?
        <div className={'snackbarSuccess'}>
          <label>{textSuccess}</label>
        </div>
        :
        <div className={'snackbarError'}>
          <label>{textError}</label>
        </div>
      }
    </div>
  </Snackbar>
)

export default SnackbarContent