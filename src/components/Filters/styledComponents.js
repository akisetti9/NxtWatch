import styled from 'styled-components'

export const FiltersList = styled.ul`
  width: 290px;
  margin-top: 0px;
  margin-left: -40px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FilterListItem = styled.li`
  width: 100%;
`
export const FilterListItemButton = styled.button`
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
  padding-left: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`
export const FiltersListItemName = styled.p`
  margin-left: 25px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const SlideContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#1e293b' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const FooterLogo = styled.img`
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
