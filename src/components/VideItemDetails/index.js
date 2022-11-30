import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

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
  PlayerContainer,
  DetailsContainer,
  CountAndDate,
  LikeAndSave,
  DescriptionContainer,
  ChannelLogo,
  Description,
  LikedButton,
  LikeButton,
  ReactPlayerContainer,
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
    isLiked: false,
    isDisliked: false,
    isSaved: false,
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

  onClickLike = () => {
    const {isLiked, isDisliked} = this.state
    if (isLiked === false) {
      if (isDisliked) {
        this.setState({isLiked: true, isDisliked: false})
      } else {
        this.setState({isLiked: true})
      }
    } else {
      this.setState({isLiked: false})
    }
  }

  onClickDislike = () => {
    const {isLiked, isDisliked} = this.state
    if (isDisliked === false) {
      if (isLiked) {
        this.setState({isDisliked: true, isLiked: false})
      } else {
        this.setState({isDisliked: true})
      }
    } else {
      this.setState({isDisliked: false})
    }
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

  updateStatus = savedVideoList => {
    const {videoItemDetails} = this.state
    const {id} = videoItemDetails
    const updatedSavedVideoList = savedVideoList.filter(each => each.id === id)
    console.log(updatedSavedVideoList)
    //   if (updatedSavedVideoList.length === 1) {
    //     this.setState({
    //       isLiked: updatedSavedVideoList.isLiked,
    //       isDisliked: updatedSavedVideoList.isDisliked,
    //       isSaved: updatedSavedVideoList.isSaved,
    //     })
    //   }
  }

  renderVideo = props => {
    const {isDarkMode, savedVideosList, onSaveVideoDetails} = props
    const {videoItemDetails, isLiked, isDisliked, isSaved} = this.state
    console.log(savedVideosList)
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoItemDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const onClickSave = () => {
      this.setState(prevState => ({
        isSaved: !prevState.isSaved,
      }))
      onSaveVideoDetails(videoItemDetails)
    }
    return (
      <PlayerContainer>
        <ReactPlayerContainer>
          <ReactPlayer width="100%" url={videoUrl} />
        </ReactPlayerContainer>
        <p>{title}</p>
        <DetailsContainer>
          <CountAndDate>
            <p>{viewCount} views</p>
            <p>{publishedAt}</p>
          </CountAndDate>
          <LikeAndSave>
            {isLiked ? (
              <LikedButton type="button" onClick={this.onClickLike}>
                <AiOutlineLike className="blue-icon" />
                Like
              </LikedButton>
            ) : (
              <LikeButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={this.onClickLike}
              >
                {isDarkMode ? (
                  <AiOutlineLike className="white-icon" />
                ) : (
                  <AiOutlineLike className="black-icon" />
                )}
                Like
              </LikeButton>
            )}
            {isDisliked ? (
              <LikedButton type="button" onClick={this.onClickDislike}>
                <AiOutlineDislike className="blue-icon" />
                Dislike
              </LikedButton>
            ) : (
              <LikeButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={this.onClickDislike}
              >
                {isDarkMode ? (
                  <AiOutlineDislike className="white-icon" />
                ) : (
                  <AiOutlineDislike className="black-icon" />
                )}
                Dislike
              </LikeButton>
            )}
            {isSaved ? (
              <LikedButton type="button" onClick={onClickSave}>
                <MdPlaylistAdd className="blue-icon" />
                Saved
              </LikedButton>
            ) : (
              <LikeButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={onClickSave}
              >
                {isDarkMode ? (
                  <MdPlaylistAdd className="white-icon" />
                ) : (
                  <MdPlaylistAdd className="black-icon" />
                )}
                Save
              </LikeButton>
            )}
          </LikeAndSave>
        </DetailsContainer>
        <DescriptionContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <Description>
            <p>{name}</p>
            <p>{subscriberCount} subscribers</p>
            <p>{description}</p>
          </Description>
        </DescriptionContainer>
      </PlayerContainer>
    )
  }

  renderResult = props => {
    const {isDarkMode, savedVideosList, onSaveVideoDetails} = props
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideo({
          isDarkMode,
          savedVideosList,
          onSaveVideoDetails,
        })
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
              const {isDarkMode, savedVideosList, onSaveVideoDetails} = value
              return (
                <VideoItemContainer
                  data-testid="videoItemDetails"
                  isDarkMode={isDarkMode}
                >
                  {this.renderResult({
                    isDarkMode,
                    savedVideosList,
                    onSaveVideoDetails,
                  })}
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
