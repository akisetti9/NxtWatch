import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  padding-bottom: 50px;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  }
`
export const VideoItemContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
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
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
