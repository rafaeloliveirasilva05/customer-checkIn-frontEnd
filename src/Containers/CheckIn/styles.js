import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1px 50px;
  margin-top: 100px;
`

export const ContainerCpf = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  input {
    max-width: 400px;
    padding: 12px 10px;
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    :focus {
      border-color: #4CAF50;
    }
  }
`

export const LabelCpf = styled.label`
  font-size: 16px;
  color: #808080;
  font-weight: bold;
  @media(min-width: 400px) {
    font-size: 24px;
    
  }
`

export const ContainerText = styled.div`
  margin-left: ${props => props.marginLeft};
  width: 100%;
  margin-bottom: 22px;
  @media(max-width: 900px){
    margin-left: 0
  }
  div {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #FFFFFF;
  }
`

export const Label = styled.label`
    font-size:18px;
    color: #808080;
    font-weight:bold;
`

export const ContainerData = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 900px) {
    flex-direction: column;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`

export const ContainerButton = styled.div`
  display: flex;
  justify-content:flex-end;
  flex-direction: row;
  @media(max-width: 768px) {
    flex-direction: column;
    justify-content:center;
    align-items: center;
    display: flex;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: ${props => props.background};
  margin-left: ${props => props.marginLeft};
  margin-top: 22px;
  color: white;
  font-size: 18px;
  padding: 8px ;
  width: 30%;
  border: none;
  border-radius: 4px;
  min-width: 20px;
  font-weight: bold;
 
  @media(max-width: 768px) {
    margin-left: 0;
    width: 50%
  }

  @media(max-width: 500px) {
    margin-left: 0;
    width: 100%
  }
`
