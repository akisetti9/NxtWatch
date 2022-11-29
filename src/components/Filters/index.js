import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FiltersList,
  FilterListItem,
  FilterListItemButton,
  FiltersListItemName,
  SlideContainer,
  FooterContainer,
  LogoContainer,
  FooterLogo,
} from './styledComponents'

const Filters = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, selectedFilter, onChangeSelectedFilter} = value

      const onChangeFilter = event => {
        onChangeSelectedFilter(event.target.innerText)
      }

      const checkForSelectedColor = id => {
        if (selectedFilter === id) {
          if (isDarkMode) {
            return '#ffffff'
          }
          return '#000000'
        }
        if (isDarkMode) {
          return '#ffffff'
        }
        return '#475569'
      }

      const checkForSelectedBgColor = id => {
        if (selectedFilter === id) {
          if (isDarkMode) {
            return '#606060'
          }
          return '#e2e8f0'
        }
        if (isDarkMode) {
          return 'transparent'
        }
        return 'transparent'
      }

      const selectedIconClass = id => {
        if (selectedFilter === id) {
          return 'selected-filter-icon'
        }
        return 'de-selected-filter-icon'
      }

      return (
        <SlideContainer isDarkMode={isDarkMode}>
          <FiltersList isDarkMode={isDarkMode}>
            <Link to="/" className="nav-link">
              <FilterListItem>
                <FilterListItemButton
                  color={checkForSelectedColor('Home')}
                  bgColor={checkForSelectedBgColor('Home')}
                  onClick={onChangeFilter}
                >
                  <AiFillHome className={selectedIconClass('Home')} />
                  <FiltersListItemName>Home</FiltersListItemName>
                </FilterListItemButton>
              </FilterListItem>
            </Link>
            <Link to="/trending" className="nav-link">
              <FilterListItem>
                <FilterListItemButton
                  color={checkForSelectedColor('Trending')}
                  bgColor={checkForSelectedBgColor('Trending')}
                  onClick={onChangeFilter}
                >
                  <HiFire className={selectedIconClass('Trending')} />
                  <FiltersListItemName>Trending</FiltersListItemName>
                </FilterListItemButton>
              </FilterListItem>
            </Link>
            <Link to="/gaming" className="nav-link">
              <FilterListItem>
                <FilterListItemButton
                  color={checkForSelectedColor('Gaming')}
                  bgColor={checkForSelectedBgColor('Gaming')}
                  onClick={onChangeFilter}
                >
                  <SiYoutubegaming className={selectedIconClass('Gaming')} />
                  <FiltersListItemName>Gaming</FiltersListItemName>
                </FilterListItemButton>
              </FilterListItem>
            </Link>
            <FilterListItem>
              <FilterListItemButton
                color={checkForSelectedColor('Saved Videos')}
                bgColor={checkForSelectedBgColor('Saved Videos')}
                onClick={onChangeFilter}
              >
                <MdPlaylistAdd className={selectedIconClass('Saved Videos')} />
                <FiltersListItemName>Saved Videos</FiltersListItemName>
              </FilterListItemButton>
            </FilterListItem>
          </FiltersList>

          <FooterContainer>
            <p>CONTACT US</p>
            <LogoContainer>
              <FooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <FooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <FooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <p>Enjoy! Now to see your channels and recommendation!</p>
          </FooterContainer>
        </SlideContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Filters
