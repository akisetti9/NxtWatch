import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#1e293b' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(243, 243, 243);
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    border-bottom-style: none;
  }
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  @media screen and (max-width: 767px) {
    padding-top: 12px;
    padding-bottom: 12px;
    flex-direction: column;
  }
`
export const NavBarMobileLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavBarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  flex: 1;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavMenuListMobile = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
`

export const NavMenuItem = styled.li`
  font-family: 'Roboto';
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// .nav-link {
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #475569;
// }

export const NavMenuItemMobile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  cursor: pointer;
`

export const LogoutDesktopBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  padding: 8px 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0967d2')};
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? '#ffffff' : '#0967d2')};
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavMobileBtn = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavBarImg = styled.img`
  width: 24px;
`
export const NavbarLgProfileThumbnailSize = styled.img`
  width: 40px;
`
export const NavLgBtn = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
