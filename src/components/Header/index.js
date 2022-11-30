import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
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
  //   NavMenuItem,
  //   NavMenuItemMobile,
  LogoutDesktopBtn,
  NavMobileBtn,
  NavBarImg,
  NavbarLgProfileThumbnailSize,
  NavLgBtn,
  PopupContainer,
  AuthorizationBtns,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

// import CartContext from '../../context/CartContext'

import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => {
  const onConfirmLogout = () => {
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
                <Link to="/" className="nav-link">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>
                <NavMenuListMobile>
                  <NavMobileBtn
                    data-testid="theme"
                    type="button"
                    onClick={onChangeTheme}
                  >
                    {isDarkMode ? (
                      <FiSun className="navbar-sm-sun-size" />
                    ) : (
                      <FaMoon className="navbar-sm-moon-size" />
                    )}
                  </NavMobileBtn>

                  <NavMobileBtn type="button">
                    {isDarkMode ? (
                      <GiHamburgerMenu className="navbar-sm-sun-size" />
                    ) : (
                      <GiHamburgerMenu className="navbar-sm-moon-size" />
                    )}
                  </NavMobileBtn>

                  <Popup
                    modal
                    trigger={
                      <NavMobileBtn data-testid="logoutButton" type="button">
                        <NavBarImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                          alt="nav logout"
                        />
                      </NavMobileBtn>
                    }
                  >
                    {close => (
                      <PopupContainer isDarkMode={isDarkMode}>
                        <p>Are you sure, you want to logout?</p>
                        <AuthorizationBtns>
                          <CancelBtn
                            type="button"
                            isDarkMode={isDarkMode}
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelBtn>

                          <ConfirmBtn type="button" onClick={onConfirmLogout}>
                            Confirm
                          </ConfirmBtn>
                        </AuthorizationBtns>
                      </PopupContainer>
                    )}
                  </Popup>
                </NavMenuListMobile>
              </NavBarMobileLogoContainer>

              <NavBarLargeContainer>
                <Link to="/" className="nav-link">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>
                <NavMenu>
                  <NavLgBtn
                    data-testid="theme"
                    type="button"
                    onClick={onChangeTheme}
                  >
                    {isDarkMode ? (
                      <FiSun className="navbar-lg-sun-size" />
                    ) : (
                      <FaMoon className="navbar-lg-moon-size" />
                    )}
                  </NavLgBtn>

                  <NavLgBtn>
                    <NavbarLgProfileThumbnailSize
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavLgBtn>

                  <Popup
                    modal
                    trigger={
                      <LogoutDesktopBtn
                        data-testid="logoutButton"
                        isDarkMode={isDarkMode}
                        type="button"
                      >
                        Logout
                      </LogoutDesktopBtn>
                    }
                  >
                    {close => (
                      <PopupContainer isDarkMode={isDarkMode}>
                        <p>Are you sure, you want to logout?</p>
                        <AuthorizationBtns>
                          <CancelBtn
                            type="button"
                            isDarkMode={isDarkMode}
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="button" onClick={onConfirmLogout}>
                            Confirm
                          </ConfirmBtn>
                        </AuthorizationBtns>
                      </PopupContainer>
                    )}
                  </Popup>
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
