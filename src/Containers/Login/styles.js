import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ccffcc;
`

export const ContainerName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
`

export const InputText = styled.input`
  width: 60%;
  max-width: 300px;
  padding: 12px 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const SubmitButton = styled.button`
  width: 60%;
  max-width: 300px;
  margin-top: 40px;
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`