import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  NavHeader,
  NavContent,
  NavBarMobileLogoContainer,
  NavBarLargeContainer,
  WebsiteLogo,
  NavMenu,
  NavMenuListMobile,
  NavMenuItem,
  NavMenuItemMobile,
  LogoutDesktopBtn,
  NavMobileBtn,
  NavBarImg,
  NavbarLgProfileThumbnailSize,
  NavLgBtn,
} from './styledComponents'

// import CartContext from '../../context/CartContext'

import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, onChangeTheme} = value

        const websiteLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavHeader isDarkMode={isDarkMode}>
            <NavContent isDarkMode={isDarkMode}>
              <NavBarMobileLogoContainer>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <NavMenuListMobile>
                  <NavMenuItemMobile>
                    <NavMobileBtn type="button" onClick={onChangeTheme}>
                      {isDarkMode ? (
                        <FiSun className="navbar-sm-sun-size" />
                      ) : (
                        <FaMoon className="navbar-sm-moon-size" />
                      )}
                    </NavMobileBtn>
                  </NavMenuItemMobile>
                  <NavMenuItemMobile>
                    <NavMobileBtn type="button">
                      {isDarkMode ? (
                        <GiHamburgerMenu className="navbar-sm-sun-size" />
                      ) : (
                        <GiHamburgerMenu className="navbar-sm-moon-size" />
                      )}
                    </NavMobileBtn>
                  </NavMenuItemMobile>
                  <NavMenuItemMobile>
                    <NavMobileBtn type="button" onClick={onClickLogout}>
                      <NavBarImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                        alt="nav logout"
                      />
                    </NavMobileBtn>
                  </NavMenuItemMobile>
                </NavMenuListMobile>
              </NavBarMobileLogoContainer>

              <NavBarLargeContainer>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <NavMenu>
                  <NavMenuItem>
                    <NavLgBtn onClick={onChangeTheme}>
                      {isDarkMode ? (
                        <FiSun className="navbar-lg-sun-size" />
                      ) : (
                        <FaMoon className="navbar-lg-moon-size" />
                      )}
                    </NavLgBtn>
                  </NavMenuItem>
                  <NavMenuItem>
                    <NavLgBtn>
                      <NavbarLgProfileThumbnailSize
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavLgBtn>
                  </NavMenuItem>
                  <NavMenuItem>
                    <LogoutDesktopBtn
                      isDarkMode={isDarkMode}
                      type="button"
                      onClick={onClickLogout}
                    >
                      Logout
                    </LogoutDesktopBtn>
                  </NavMenuItem>
                </NavMenu>
              </NavBarLargeContainer>
            </NavContent>
          </NavHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
