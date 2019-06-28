import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ModalDialog = ({ bodyText, titleText, openDiolog, rejectActionDialog, acceptActionDialog }) => (
  <div>
    <Dialog
      open={openDiolog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{titleText}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {bodyText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={rejectActionDialog} color="primary">Não</Button>
        <Button onClick={acceptActionDialog} color="primary" autoFocus>Sim</Button>
      </DialogActions>
    </Dialog>
  </div>
)

export default ModalDialog
