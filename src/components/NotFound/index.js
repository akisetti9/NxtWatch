import Header from '../Header'
import {NotFoundContainer, NotFoundImg} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const notFoundImageUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer isDarkMode={isDarkMode}>
            <NotFoundImg src={notFoundImageUrl} alt="not found" />
            <h1>Page Not Found</h1>
            <p>we are sorry, the page you requested could not be found.</p>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
