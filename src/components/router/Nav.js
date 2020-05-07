import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'
import styled from 'styled-components'

import Home from '../../pages/Home'
import Test from '../../pages/Test'
import Item from '../../pages/Item'
import JoinIn from '../../pages/JoinIn'
import Dress from './Dress'
import Edit from '../../pages/EditId'
import Admin from '../../pages/Admin'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import NavButton from './NavButton'

const arr = ["", "dress", "test"];

class Nav extends Component {
    render() {
        return (
            <Main>
          <Navigation>
          <ButtonGroup>
          <Ul>
            {/*Mapping list array to NavButton component of Routher Link */}
            {arr.map(path => <NavButton link={path} />)}
          </Ul>
          </ButtonGroup> 
        </Navigation>

            {/*To add lists you should add a component in Route after adding list in the array */}
        <Switch>                    
          <Route path="/admin" children={<Admin />} />
          <Route path="/edit/:id" children={<Edit />} />
          <Route path="/join" children={<JoinIn />} />
          <Route path="/dress">
              <Dress />
          </Route>
          <Route path="/test">
              <Test />
          </Route>
          <Route path="/item">
              <Item />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
        </Main>
        );
    }
}

export default Nav;

//constants under here are for style sheet.
const Navigation = styled.nav`
  height: 3rem;
  top: 2rem; 
  display: block;
  z-index: 1;
  position: fixed; 
`
const Ul = styled.ul`  
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Main = styled.div`
margin: 0 auto;
width: 70%;
`