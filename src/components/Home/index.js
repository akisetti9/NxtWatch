// import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'

import './index.css'
import {
  MainContainer,
  FiltersList,
  FilterListItem,
  FilterListItemButton,
  FiltersListItemName,
  HomeContainer,
  BannerContainer,
  LogoAndClose,
  WebsiteLogo,
  CloseButton,
  BannerHeading,
  GetItNow,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoContainer,
  ThumbnailImage,
  ProfileDetailsContainer,
  ProfileImage,
  DetailsContainer,
  TitleHeading,
  ChannelName,
  CountAndTime,
  LandingHeader,
  LandingImgContainer,
  LandingTitle,
  TrendingVideosList,
  TrendingVideoContainer,
  TrendingThumbnailImage,
  TrendingProfileDetailsContainer,
  TrendingProfileImage,
  TrendingDetailsContainer,
  TrendingTitleHeading,
  TrendingChannelName,
  TrendingCountAndTime,
  GamingVideoContainer,
  GamingThumbnailImage,
  GamingTitleHeading,
  GamingCount,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
    selectedFilter: 'Home',
    videosList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const {selectedFilter} = this.state
    if (selectedFilter === 'Home') {
      this.getHomeVideosData()
    } else if (selectedFilter === 'Trending') {
      this.getTrendingVideosData()
    } else if (selectedFilter === 'Gaming') {
      this.getGamingVideosData()
    }
  }

  getHomeVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getTrendingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getGamingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  changeFilter = event => {
    this.setState({selectedFilter: event.target.innerText}, this.getData)
  }

  checkForSelectedColor = props => {
    const {isDarkMode, id} = props
    const {selectedFilter} = this.state
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

  checkForSelectedBgColor = props => {
    const {isDarkMode, id} = props
    const {selectedFilter} = this.state
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

  selectedIconClass = id => {
    const {selectedFilter} = this.state
    if (selectedFilter === id) {
      return 'selected-filter-icon'
    }
    return 'de-selected-filter-icon'
  }

  onEnterSearchInput = event => {
    const {searchInput} = this.state
    if (event.key === 'Enter') {
      console.log(searchInput)
      this.getData()
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    console.log(searchInput)
    this.getData()
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput
            value={searchInput}
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onEnterSearchInput}
          />
        </SearchInputContainer>
        <SearchButton type="button" onClick={this.onClickSearchButton}>
          <BsSearch className="search-icon" />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">No Search results found</h1>
      <p className="products-failure-description">
        Try different key words or remove search filter
      </p>
    </div>
  )

  renderNoVideosView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">No Search results found</h1>
      <p className="products-failure-description">
        Try different key words or remove search filter
      </p>
      <button type="button">Retry</button>
    </div>
  )

  renderVideosView = isDarkMode => {
    const {selectedFilter} = this.state
    switch (selectedFilter) {
      case 'Home':
        return this.renderHomeVideosView(isDarkMode)
      case 'Trending':
        return this.renderTrendingVideosView(isDarkMode)
      case 'Gaming':
        return this.renderGamingVideosView(isDarkMode)
      default:
        return null
    }
  }

  renderHomeVideosView = isDarkMode => {
    const {showBanner, videosList} = this.state
    console.log(videosList)
    return (
      <>
        <BannerContainer showBanner={showBanner}>
          <LogoAndClose>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <CloseButton type="button" onClick={this.onCloseBanner}>
              <AiOutlineClose />
            </CloseButton>
          </LogoAndClose>
          <BannerHeading>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerHeading>
          <GetItNow type="button">GET IT NOW</GetItNow>
        </BannerContainer>
        {this.renderSearchInput()}
        <VideosList>
          {videosList.map(each => this.renderHomeEachVideo({each, isDarkMode}))}
        </VideosList>
      </>
    )
  }

  renderHomeEachVideo = props => {
    const {each, isDarkMode} = props
    const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
    const {name, profileImageUrl} = channel
    return (
      <VideoContainer key={id}>
        <ThumbnailImage src={thumbnailUrl} alt={title} />
        <ProfileDetailsContainer>
          <ProfileImage src={profileImageUrl} alt={name} />
          <DetailsContainer>
            <TitleHeading isDarkMode={isDarkMode}>{title}</TitleHeading>
            <ChannelName isDarkMode={isDarkMode}>{name}</ChannelName>
            <CountAndTime isDarkMode={isDarkMode}>
              {viewCount} views . {publishedAt}
            </CountAndTime>
          </DetailsContainer>
        </ProfileDetailsContainer>
      </VideoContainer>
    )
  }

  renderTrendingVideosView = isDarkMode => {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <>
        <LandingHeader>
          <LandingImgContainer>
            <HiFire className="lading-logo" />
          </LandingImgContainer>
          <LandingTitle>Trending</LandingTitle>
        </LandingHeader>
        <TrendingVideosList>
          {videosList.map(each =>
            this.renderTrendingEachVideo({each, isDarkMode}),
          )}
        </TrendingVideosList>
      </>
    )
  }

  renderTrendingEachVideo = props => {
    const {each, isDarkMode} = props
    const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
    const {name, profileImageUrl} = channel
    return (
      <TrendingVideoContainer key={id}>
        <TrendingThumbnailImage src={thumbnailUrl} alt={title} />
        <TrendingProfileDetailsContainer>
          <TrendingProfileImage src={profileImageUrl} alt={name} />
          <TrendingDetailsContainer>
            <TrendingTitleHeading isDarkMode={isDarkMode}>
              {title}
            </TrendingTitleHeading>
            <TrendingChannelName isDarkMode={isDarkMode}>
              {name}
            </TrendingChannelName>
            <TrendingCountAndTime isDarkMode={isDarkMode}>
              {viewCount} views . {publishedAt}
            </TrendingCountAndTime>
          </TrendingDetailsContainer>
        </TrendingProfileDetailsContainer>
      </TrendingVideoContainer>
    )
  }

  renderGamingVideosView = isDarkMode => {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <>
        <LandingHeader>
          <LandingImgContainer>
            <SiYoutubegaming className="lading-logo" />
          </LandingImgContainer>
          <LandingTitle>Gaming</LandingTitle>
        </LandingHeader>
        <VideosList>
          {videosList.map(each =>
            this.renderGamingEachVideo({each, isDarkMode}),
          )}
        </VideosList>
      </>
    )
  }

  renderGamingEachVideo = props => {
    const {each, isDarkMode} = props
    const {id, title, thumbnailUrl, viewCount} = each
    return (
      <GamingVideoContainer key={id}>
        <GamingThumbnailImage src={thumbnailUrl} alt={title} />
        <GamingTitleHeading isDarkMode={isDarkMode}>{title}</GamingTitleHeading>
        <GamingCount isDarkMode={isDarkMode}>
          {viewCount} Watching Worldwide
        </GamingCount>
      </GamingVideoContainer>
    )
  }

  renderResult = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkMode)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    const {selectedFilter} = this.state
    console.log(selectedFilter)
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkMode} = value
            return (
              <MainContainer isDarkMode={isDarkMode}>
                <FiltersList isDarkMode={isDarkMode}>
                  <FilterListItem>
                    <FilterListItemButton
                      color={this.checkForSelectedColor({
                        isDarkMode,
                        id: 'Home',
                      })}
                      bgColor={this.checkForSelectedBgColor({
                        isDarkMode,
                        id: 'Home',
                      })}
                      onClick={this.changeFilter}
                    >
                      <AiFillHome className={this.selectedIconClass('Home')} />
                      <FiltersListItemName>Home</FiltersListItemName>
                    </FilterListItemButton>
                  </FilterListItem>
                  <FilterListItem>
                    <FilterListItemButton
                      color={this.checkForSelectedColor({
                        isDarkMode,
                        id: 'Trending',
                      })}
                      bgColor={this.checkForSelectedBgColor({
                        isDarkMode,
                        id: 'Trending',
                      })}
                      onClick={this.changeFilter}
                    >
                      <HiFire className={this.selectedIconClass('Trending')} />
                      <FiltersListItemName>Trending</FiltersListItemName>
                    </FilterListItemButton>
                  </FilterListItem>
                  <FilterListItem>
                    <FilterListItemButton
                      color={this.checkForSelectedColor({
                        isDarkMode,
                        id: 'Gaming',
                      })}
                      bgColor={this.checkForSelectedBgColor({
                        isDarkMode,
                        id: 'Gaming',
                      })}
                      onClick={this.changeFilter}
                    >
                      <SiYoutubegaming
                        className={this.selectedIconClass('Gaming')}
                      />
                      <FiltersListItemName>Gaming</FiltersListItemName>
                    </FilterListItemButton>
                  </FilterListItem>
                  <FilterListItem>
                    <FilterListItemButton
                      color={this.checkForSelectedColor({
                        isDarkMode,
                        id: 'Saved Videos',
                      })}
                      bgColor={this.checkForSelectedBgColor({
                        isDarkMode,
                        id: 'Saved Videos',
                      })}
                      onClick={this.changeFilter}
                    >
                      <MdPlaylistAdd
                        className={this.selectedIconClass('Saved Videos')}
                      />
                      <FiltersListItemName>Saved Videos</FiltersListItemName>
                    </FilterListItemButton>
                  </FilterListItem>
                </FiltersList>

                <HomeContainer>{this.renderResult(isDarkMode)}</HomeContainer>
              </MainContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default Home
