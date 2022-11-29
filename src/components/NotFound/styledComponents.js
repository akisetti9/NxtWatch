import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  width: 100vw;
  height: 100vh;
`

export const NotFoundImg = styled.img`
  width: 350px;
`
