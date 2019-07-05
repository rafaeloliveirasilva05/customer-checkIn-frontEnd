import styled from 'styled-components'

export const Togle_button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  div {
    width: 30px;
    height: 2px;
    background: white;
  }

  @media(min-width: 768px) {
    display: none
  }
`