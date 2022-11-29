import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'

import Filters from '../Filters'

import './index.css'
import {
  MainContainer,
  TrendingContainer,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
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

  onClickRetry = () => {
    this.getTrendingVideosData()
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
      <Link to={`/videos/${id}`} className="video-link">
        <TrendingVideoContainer key={id}>
          <TrendingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
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
      </Link>
    )
  }

  renderResult = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView(isDarkMode)
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
                <TrendingContainer data-testid="gaming" isDarkMode={isDarkMode}>
                  {this.renderResult(isDarkMode)}
                </TrendingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </MainContainer>
      </>
    )
  }
}

export default Trending
