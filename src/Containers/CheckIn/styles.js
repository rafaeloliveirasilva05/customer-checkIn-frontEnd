import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1px 50px;
`

export const ContainerCpf = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  input {
    max-width: 400px;
    padding: 12px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  label {
    font-size: 16px;
    @media(min-width: 400px) {
      font-size: 30px
    }
  }
`

export const ContainerText = styled.div`
  margin-left: ${props => props.marginLeft};
  width: 100%;
  @media(max-width: 900px){
    margin-left: 0
  }
  label {
    font-size: 18px;
    font-weight: bold
  }
  div {
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
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
  @media(max-width: 900px) {
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
  margin-top: 10px;
  color: white;
  padding: 10px 100px;
  border: none;
  border-radius: 4px;
  @media(max-width: 900px) {
    margin-left: 0;
  }
`
