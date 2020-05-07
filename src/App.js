import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import styled from 'styled-components'

import Nav from './components/router/Nav'
import Login from './pages/Login'

class App extends Component {
  render() {        
    return (
      <Router>
        <Background>
          <Login />
          <Nav />
        </Background>
      </Router>
    );
  }
}

export default App;

const Background = styled.div`
`