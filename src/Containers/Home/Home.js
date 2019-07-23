import React, { Component } from 'react'
import { FaFemale, FaMale, FaBeer } from 'react-icons/fa'

import { Container, Box, ContainerAmountUser } from './styles'
import { showCustomerInputData } from '../../functions/fetches'
class Home extends Component {
  state = {
    femalePresence: 0,
    femaleTotal: 0,
    malePresence: 0,
    maleTotal: 0
  }

  componentDidMount = async () => {
    const customerPresenceData = await showCustomerInputData()
    const { femalePresence, femaleTotal } = customerPresenceData.data
    const { malePresence, maleTotal } = customerPresenceData.data

    this.setState({
      femalePresence,
      femaleTotal,
      malePresence,
      maleTotal
    })
  }

  showBoxDataUser = ({ typeBox }) => {
    const { femalePresence, femaleTotal } = this.state
    const { malePresence, maleTotal } = this.state
    let boxData

    switch (typeBox) {
      case 'amountUserFemale':
        boxData = {
          total: `${femalePresence} / ${femaleTotal}`,
          titleBox: 'Feminino',
          colorBox: 'red',
          icon: <FaFemale size={54} color={'#FFFF'} />
        }
        break

      case 'amountUserMale':
        boxData = {
          total: `${malePresence} / ${maleTotal}`,
          titleBox: 'Masculino',
          colorBox: 'blue',
          icon: <FaMale size={54} color={'#FFFF'} />
        }
        break

      case 'totalCustomersInTheHouse':
        boxData = {
          total: `${femalePresence + malePresence} / ${femaleTotal + maleTotal}`,
          titleBox: 'Total na casa',
          colorBox: 'green',
          icon: <FaBeer size={54} color={'#FFFF'} />
        }
        break

      default:
        break
    }

    return (
      <Box color={boxData.colorBox}>
        <div > {boxData.icon}</div>
        <div>
          <label>{boxData.titleBox}</label>
          <ContainerAmountUser >
            <label>{boxData.total}</label>
          </ContainerAmountUser>
        </div>
      </Box>
    )
  }

  render() {
    return (
      <Container>
        {this.showBoxDataUser({ typeBox: 'totalCustomersInTheHouse' })}
        {this.showBoxDataUser({ typeBox: 'amountUserFemale' })}
        {this.showBoxDataUser({ typeBox: 'amountUserMale' })}
      </Container>
    )
  }
}

export default Home
