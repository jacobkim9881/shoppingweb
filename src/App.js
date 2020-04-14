import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/router/Nav'


class App extends Component {
  render() {        
    return (
      <Router>
        <Background>
          <Nav />
        </Background>
      </Router>
    );
  }
}

export default App;

const Background = styled.div`
`