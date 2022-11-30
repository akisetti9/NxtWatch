import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: auto;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const VideoItemContainer = styled.div`
  width: 1800px;
  max-width: 100vw;
  margin-top: 60px;
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  justify-content: self-start;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0px;
  }
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
export const PlayerContainer = styled.div`
  width: 100%;
  padding: 8px;
  align-items: center;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CountAndDate = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const LikeAndSave = styled.div`
  width: 200px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ChannelLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const LikedButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: #2563eb;
  border-radius: 8px;
  margin: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`
export const LikeButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => (props.isDarkMode ? '#64748b' : '#64748b')};
  border-radius: 8px;
  margin: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`
export const ReactPlayerContainer = styled.div`
  width: 80%;
  scale: 100%;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
