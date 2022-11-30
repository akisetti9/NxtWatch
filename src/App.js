import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideItemDetails from './components/VideItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import NxtWatchContext from './context/NxtWatchContext'

class App extends Component {
  state = {isDarkMode: false, selectedFilter: 'Home', savedVideosList: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onChangeSelectedFilter = selectedFilter => {
    this.setState({selectedFilter})
  }

  onSaveVideoDetails = videoItemDetails => {
    const {savedVideosList} = this.state
    const isPresent = savedVideosList.includes(videoItemDetails)
    if (isPresent) {
      const {id} = videoItemDetails
      const updatedVideosList = savedVideosList.filter(each => each.id !== id)
      this.setState({savedVideosList: [...updatedVideosList]})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItemDetails],
      }))
    }
  }

  render() {
    const {isDarkMode, savedVideosList, selectedFilter} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          onChangeTheme: this.onChangeTheme,
          selectedFilter,
          onChangeSelectedFilter: this.onChangeSelectedFilter,
          savedVideosList,
          onSaveVideoDetails: this.onSaveVideoDetails,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
