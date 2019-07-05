import styled from 'styled-components'

export const Side_drawer = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: ${props=> props.isOpen};
  transition: transform 0.3s ease-out;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center
  }

  div {
    margin: 0.5rem 1rem
  }

  a {
    color: green;
    text-decoration: none;
    font-size: 1.2rem
  }

  @media(min-width: 768px) {
    display: none
  }
`