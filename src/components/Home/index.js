import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'

import Filters from '../Filters'

import './index.css'
import {
  OuterContainer,
  MainContainer,
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
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
  RetryBtn,
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
    videosCount: 0,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      if (fetchedData.total !== 0) {
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
          videosCount: fetchedData.total,
          videosList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          videosCount: fetchedData.total,
          videosList: [],
          apiStatus: apiStatusConstants.success,
        })
      }
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getHomeVideosData()
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideosData()
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideosData)
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
        <SearchButton
          data-testid="searchButton"
          type="button"
          onClick={this.onClickSearchButton}
        >
          <BsSearch className="search-icon" />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = isDarkMode => (
    <FailureContainer>
      {isDarkMode ? (
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure view"
        />
      ) : (
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
      )}
      <FailureHeading isDarkMode={isDarkMode}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureMsg isDarkMode={isDarkMode}>
        We are having some trouble to complete your request. Please try again.
      </FailureMsg>
      <RetryBtn
        data-testid="retryButton"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  renderNoVideosView = isDarkMode => (
    <FailureContainer data-testid="noVideos">
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading isDarkMode={isDarkMode}>
        No Search results found
      </FailureHeading>
      <FailureMsg isDarkMode={isDarkMode}>
        Try different key words or remove search filter
      </FailureMsg>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  renderBanner = () => {
    const {showBanner} = this.state
    return (
      <BannerContainer data-testid="banner" showBanner={showBanner}>
        <LogoAndClose>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <AiOutlineClose />
          </CloseButton>
        </LogoAndClose>
        <BannerHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <GetItNow type="button">GET IT NOW</GetItNow>
      </BannerContainer>
    )
  }

  renderHomeVideosView = isDarkMode => {
    const {videosCount, videosList} = this.state
    return (
      <>
        {this.renderBanner()}
        {this.renderSearchInput()}
        {videosCount === 0 ? (
          this.renderNoVideosView(isDarkMode)
        ) : (
          <VideosList>
            {videosList.map(each =>
              this.renderHomeEachVideo({each, isDarkMode}),
            )}
          </VideosList>
        )}
      </>
    )
  }

  renderHomeEachVideo = props => {
    const {each, isDarkMode} = props
    const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
    const {name, profileImageUrl} = channel
    return (
      <Link to={`/videos/${id}`} key={id} className="video-link">
        <VideoContainer key={id}>
          <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <ProfileDetailsContainer>
            <ProfileImage src={profileImageUrl} alt="channel logo" />
            <DetailsContainer>
              <TitleHeading isDarkMode={isDarkMode}>{title}</TitleHeading>
              <ChannelName isDarkMode={isDarkMode}>{name}</ChannelName>
              <CountAndTime isDarkMode={isDarkMode}>
                {viewCount} views . {publishedAt}
              </CountAndTime>
            </DetailsContainer>
          </ProfileDetailsContainer>
        </VideoContainer>
      </Link>
    )
  }

  renderResult = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideosView(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkMode)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <OuterContainer data-testid="home" isDarkMode={isDarkMode}>
              <Header />
              <MainContainer>
                <Filters />
                <HomeContainer isDarkMode={isDarkMode}>
                  {this.renderResult(isDarkMode)}
                </HomeContainer>
              </MainContainer>
            </OuterContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
