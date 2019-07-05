import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'

import { getClients } from '../../functions/fetches'
import { connect } from 'react-redux'
import { Container } from './styles'

class Sobre extends Component {
  state = {
    DataClients: null,
    totalClients: null,
    rowsPerPage: 10,
    page: 0
  }

  componentDidMount = () => {
    this.getDataClients()
  }

  getDataClients = async () => {
    const response = await getClients(this.props.Auth.token, this.state.page + 1, this.state.rowsPerPage)
    if (response) {
      this.setState({
        DataClients: response.data.result.dataClients,
        totalClients: response.data.total
      })
    }
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage }, () => this.getDataClients())
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    }, () => this.getDataClients())
  }

  clientsTable = () => (
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Cpf</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Quarto</TableCell>
            <TableCell align="right">Presente</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {this.state.DataClients.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cpf}</TableCell>
              <TableCell align="right">{row.roomType}</TableCell>
              <TableCell align="right">{row.roomNumber}</TableCell>
              <TableCell align="right">{row.presenceRecord ? 'Sim' : 'Não'}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              count={this.state.totalClients}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              labelRowsPerPage={'Clientes por pagina'}
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
              SelectProps={{
                inputProps: { 'aria-label': 'Rows per page' },
                native: true,
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage} />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  )

  render() {
    return (
      <Container>
        {this.state.DataClients ? this.clientsTable() : <LinearProgress />}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Sobre)