import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  padding-bottom: 50px;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  }
`

export const TrendingContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: self-start;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
`
export const LandingHeader = styled.div`
  width: 100%;
  background-color: #cccccc;
  color: #000000;
  padding: 32px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: self-start;
`
export const LandingImgContainer = styled.div`
  background-color: #e2e8f0;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const LandingTitle = styled.h1`
  margin-left: 24px;
`
export const TrendingVideosList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: -30px;
`
export const TrendingVideoContainer = styled.li`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const TrendingThumbnailImage = styled.img`
  width: 350px;
`
export const TrendingProfileDetailsContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const TrendingProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 8px;
`
export const TrendingTitleHeading = styled.p`
  width: 100%;
  font-size: 24px;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const TrendingChannelName = styled.p`
  width: 100%;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const TrendingCountAndTime = styled.p`
  width: 100%;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const FailureContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FailureImg = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const FailureMsg = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const RetryBtn = styled.button`
  width: 100px;
  padding: 8px;
  border-style: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #4f46e5;
`
