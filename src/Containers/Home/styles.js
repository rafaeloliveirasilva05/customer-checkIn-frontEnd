import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content:center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content:end;
  }
`

export const Box = styled.div`
  display: flex;
  height: 100px;
  padding-right: 25.31px;
  width: 230px;
  background: ${props => props.color};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0px;
  }

  label {
    font-weight: bold;
    color: #FFFF;
    font-size: 20px
  }
`

export const ContainerAmountUser = styled.div`
  display: flex;
  margin-top: 6px;
  justify-content: center;
   label {
    font-size: 26px
  }
`
