import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'

import Filters from '../Filters'

import './index.css'
import {
  MainContainer,
  GamingContainer,
  VideosList,
  LandingHeader,
  LandingImgContainer,
  LandingTitle,
  GamingVideoContainer,
  GamingThumbnailImage,
  GamingTitleHeading,
  GamingCount,
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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getGamingVideosData()
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

  onClickRetry = () => {
    this.getGamingVideosData()
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
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

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
      <Link to={`/videos/${id}`} className="video-link">
        <GamingVideoContainer key={id}>
          <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <GamingTitleHeading isDarkMode={isDarkMode}>
            {title}
          </GamingTitleHeading>
          <GamingCount isDarkMode={isDarkMode}>
            {viewCount} Watching Worldwide
          </GamingCount>
        </GamingVideoContainer>
      </Link>
    )
  }

  renderResult = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView(isDarkMode)
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
      <>
        <Header />
        <MainContainer>
          <Filters />
          <NxtWatchContext.Consumer>
            {value => {
              const {isDarkMode} = value
              return (
                <GamingContainer data-testid="gaming" isDarkMode={isDarkMode}>
                  {this.renderResult(isDarkMode)}
                </GamingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </MainContainer>
      </>
    )
  }
}

export default Gaming
