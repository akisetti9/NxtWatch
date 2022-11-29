import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  }
`
export const FiltersList = styled.ul`
  width: 250px;
  margin-top: 0px;
  margin-left: -40px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FilterListItem = styled.li`
  width: 100%;
`
export const FilterListItemButton = styled.button`
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
  padding-left: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`
export const FiltersListItemName = styled.p`
  margin-left: 25px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const HomeContainer = styled.div`
  width: 85%;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: self-start;
`
export const BannerContainer = styled.div`
  width: 100%;
  padding: 12px;
  color: #475569;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: right;
  display: ${props => (props.showBanner ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: self-start;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`
export const LogoAndClose = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 64px;
  @media screen and (max-width: 768px) {
    padding-right: 16px;
  }
`
export const WebsiteLogo = styled.img`
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const CloseButton = styled.button`
  width: 24px;
  border-radius: 12px;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const BannerHeading = styled.h1`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const GetItNow = styled.button`
  width: 150px;
  color: #475569;
  font-weight: 600;
  border-style: solid;
  border-color: #475569;
  border-radius: 8px;
  background-color: transparent;
  padding: 12px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  height: 36px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 0px;
`
export const SearchInputContainer = styled.div`
  width: 50%;
  height: 36px;
  display: flex;
  align-items: center;
  background-color: #f1f5f9;
  border-style: solid;
  border-width: 1px;
  border-color: #475569;
  border-radius: 0px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  background-color: #ffffff;
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  flex-grow: 1;
`
export const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #475569;
  cursor: pointer;
`
export const VideosList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: -50px;
`
export const VideoContainer = styled.li`
  width: 300px;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ProfileDetailsContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`
export const DetailsContainer = styled.div`
  width: 220px;
  font-size: 15px;
  margin: 0px;
  padding-left: 4px;
`
export const TitleHeading = styled.h1`
  width: 100%;
  font-size: 15px;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const ChannelName = styled.p`
  width: 100%;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const CountAndTime = styled.p`
  width: 100%;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
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
  margin-left: -50px;
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
export const TrendingTitleHeading = styled.h1`
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
export const GamingVideoContainer = styled.li`
  width: 300px;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const GamingThumbnailImage = styled.img`
  width: 100%;
`
export const GamingTitleHeading = styled.h1`
  width: 100%;
  font-size: 24px;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
export const GamingCount = styled.p`
  width: 100%;
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
