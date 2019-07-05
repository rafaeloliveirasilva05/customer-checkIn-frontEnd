import styled from 'styled-components'

export const ToolbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: green;
`

export const Toolbar__navigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`

export const Toolbar__logo = styled.div`
  margin-left: 1rem;  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem
  }

  @media(min-width: 768px){
    margin-left: 0
  }
`

export const Spacer = styled.div`
  flex: 1
`

export const Toolbar__navigation_items = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    
  }

  div {
    padding: 0 0.5rem
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media(max-width: 768px){
    ul {
      display: none
    }
  }
`