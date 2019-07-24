import styled from 'styled-components'

export const Container = styled.div`
  min-width: 850px;
  padding-right: 50px;
  padding-left: 100px;
  margin-top: 100px
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${props => props.background};
  margin: 22px 0;
  color: white;
  font-size: 18px;
  padding: 8px ;
  width: 30%;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`