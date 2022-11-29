import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideItemDetails from './components/VideItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import NxtWatchContext from './context/NxtWatchContext'

class App extends Component {
  state = {isDarkMode: false, selectedFilter: 'Home'}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onChangeSelectedFilter = selectedFilter => {
    this.setState({selectedFilter})
  }

  render() {
    const {isDarkMode, selectedFilter} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          onChangeTheme: this.onChangeTheme,
          selectedFilter,
          onChangeSelectedFilter: this.onChangeSelectedFilter,
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
