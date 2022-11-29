import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'

import Filters from '../Filters'

import './index.css'
import {
  MainContainer,
  VideoItemContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
  RetryBtn,
  DetailsContainer,
  CountAndDate,
  LikeAndSave,
  DescriptionContainer,
  ChannelLogo,
  Description,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: [],
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getVideoItemData()
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

  renderVideo = isDarkMode => {
    const {videoItemDetails} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoItemDetails
    const {name, profileImageUrl, subscriberCount} = channel
    console.log(isDarkMode)
    console.log(id, title, thumbnailUrl, viewCount, publishedAt, description)
    console.log(name, profileImageUrl, subscriberCount)
    return (
      <>
        <ReactPlayer url={videoUrl} />
        <p>{title}</p>
        <DetailsContainer>
          <CountAndDate>
            <p>{viewCount} views</p>
            <p>{publishedAt}</p>
          </CountAndDate>
          <LikeAndSave>
            <p>Like</p>
            <p>Dislike</p>
            <p>Save</p>
          </LikeAndSave>
        </DetailsContainer>
        <DescriptionContainer>
          <ChannelLogo src={profileImageUrl} />
          <Description>
            <p>{name}</p>
            <p>{subscriberCount} subscribers</p>
            <p>{description}</p>
          </Description>
        </DescriptionContainer>
      </>
    )
  }

  renderResult = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideo(isDarkMode)
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
                <VideoItemContainer
                  data-testid="gaming"
                  isDarkMode={isDarkMode}
                >
                  {this.renderResult(isDarkMode)}
                </VideoItemContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </MainContainer>
      </>
    )
  }
}

export default VideItemDetails
