import React, { Component } from 'react'
import { FaFemale, FaMale } from 'react-icons/fa'

import { Container, Box, ContainerAmountUser } from './styles'

class Home extends Component {

  showBoxDataUser = ({ typeBox }) => {
    const checkTypeBox = typeBox.includes('amountUserFemale')
    const total = checkTypeBox ? '18 / 104' : '22 / 52'

    return (
      <Box color={checkTypeBox ? 'red' : 'blue'}>
        <div >
          {checkTypeBox ? <FaFemale size={54} color={'#FFFF'} /> : <FaMale size={54} color={'#FFFF'} />}
        </div>
        <div>
          <label>{checkTypeBox ? 'Total Feminino' : 'Total Masculino'}</label>
          <ContainerAmountUser >
            <label>{total}</label>
          </ContainerAmountUser>
        </div>
      </Box>
    )
  }

  render() {
    return (
      <Container>
        {this.showBoxDataUser({ typeBox: 'amountUserFemale' })}
        {this.showBoxDataUser({ typeBox: 'amountUserMale' })}
      </Container>
    )
  }
}

export default Home
