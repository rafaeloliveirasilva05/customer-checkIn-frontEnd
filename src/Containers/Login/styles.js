import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerName = styled.div`
  width: 60%;
  max-width: 300px;

  label {
    font-weight: bold;
    font-size: 16px;
    color: #ccc
  }
`

export const InputText = styled.input`
  width: 100%;
  padding: 12px 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  :focus{
    border-color: #4CAF50;
  }
`

export const SubmitButton = styled.button`
  width: 60%;
  max-width: 300px;
  margin-top: 40px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`