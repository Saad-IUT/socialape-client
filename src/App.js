import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//Components
import NavBar from './components/NavBar'

// Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <Router>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={home} />
              <Route exact path='/login' component={login} />
              <Route exact path='/signup' component={signup} />
              {/* <Route exact path='/users/:handle' component={user} /> */}
              {/* <Route
                exact
                path='/users/:handle/scream/:screamId'
                component={user}
              /> */}
            </Switch>
          </div>
        </Router>
        {/* </Provider> */}
      </MuiThemeProvider>
    )
  }
}

export default App
