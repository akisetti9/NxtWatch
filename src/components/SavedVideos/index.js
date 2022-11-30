import {Component} from 'react'
import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'
// import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'

import Filters from '../Filters'

import './index.css'
import {
  OuterContainer,
  MainContainer,
  SavedContainer,
  LandingHeader,
  LandingImgContainer,
  LandingTitle,
  SavedVideosList,
  SavedVideoContainer,
  SavedThumbnailImage,
  SavedProfileDetailsContainer,
  SavedProfileImage,
  SavedDetailsContainer,
  SavedTitleHeading,
  SavedChannelName,
  SavedCountAndTime,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class SavedVideos extends Component {
  renderFailureView = isDarkMode => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <FailureHeading isDarkMode={isDarkMode}>
        No saved videos found
      </FailureHeading>
      <FailureMsg isDarkMode={isDarkMode}>
        You can save your videos while watching them
      </FailureMsg>
    </FailureContainer>
  )

  renderVideosView = props => {
    const {isDarkMode, savedVideosList} = props
    return (
      <>
        <LandingHeader>
          <LandingImgContainer>
            <HiFire className="lading-logo" />
          </LandingImgContainer>
          <LandingTitle>Saved Videos</LandingTitle>
        </LandingHeader>
        <SavedVideosList>
          {savedVideosList.map(each =>
            this.renderEachVideo({each, isDarkMode}),
          )}
        </SavedVideosList>
      </>
    )
  }

  renderEachVideo = props => {
    const {each, isDarkMode} = props
    const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
    const {name, profileImageUrl} = channel
    return (
      <Link to={`/videos/${id}`} key={id} className="video-link">
        <SavedVideoContainer key={id}>
          <SavedThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <SavedProfileDetailsContainer>
            <SavedProfileImage src={profileImageUrl} alt="channel logo" />
            <SavedDetailsContainer>
              <SavedTitleHeading isDarkMode={isDarkMode}>
                {title}
              </SavedTitleHeading>
              <SavedChannelName isDarkMode={isDarkMode}>
                {name}
              </SavedChannelName>
              <SavedCountAndTime isDarkMode={isDarkMode}>
                {viewCount} views . {publishedAt}
              </SavedCountAndTime>
            </SavedDetailsContainer>
          </SavedProfileDetailsContainer>
        </SavedVideoContainer>
      </Link>
    )
  }

  renderResult = props => {
    const {isDarkMode, savedVideosList} = props
    const videosCount = savedVideosList.length
    switch (videosCount) {
      case 0:
        return this.renderFailureView(isDarkMode)
      default:
        return this.renderVideosView({isDarkMode, savedVideosList})
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, savedVideosList} = value
          return (
            <OuterContainer data-testid="savedVideos" isDarkMode={isDarkMode}>
              <Header />
              <MainContainer>
                <Filters />
                <SavedContainer isDarkMode={isDarkMode}>
                  {this.renderResult({isDarkMode, savedVideosList})}
                </SavedContainer>
              </MainContainer>
            </OuterContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
