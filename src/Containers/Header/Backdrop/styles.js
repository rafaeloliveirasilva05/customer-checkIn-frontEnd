import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0; 
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 100;

  @media(min-width: 768px) {
    display: none
  }
`