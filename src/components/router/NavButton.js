import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class NavButton extends Component {
    render() {
        //Get props to SideBar component for Route Link.
        //If link is empty then link will get / for Home
        let path = () => this.props.link === ""? "/" : "/" + this.props.link;
        //To put names same to link
        let firstCharacter = this.props.link.slice(0, 1);
        let restCharacters = this.props.link.slice(1);
        let ButtonName = firstCharacter.toUpperCase() + restCharacters;
        return (
            <StyledButton>
              {/*This Link will get link from arr array which get mapping */}
              <StyledLink to={path()}>
                {/*This is header of link. Default is Home */}
                <StyledHeading>                  
                    {this.props.link === ""? "Home" : ButtonName}                  
                </StyledHeading>
              </StyledLink>        
            </StyledButton>
        );
    }
}

export default NavButton;

const StyledButton = styled.button`
width: 10rem;
height: 3rem;
background-color: hsla(0, 100%, 0%, 0.8);
border-color: hsla(0, 100%, 0%, 0.8);
`
const StyledLink = styled(Link)`
font-size: 25px;
text-decoration: none;
&:visited {
  color: hsl(0, 100%, 100%);;
}
&:hover {
  color: red;
}
`
const StyledHeading = styled.p`
height: 2.4rem;
width: 9.3rem;
margin: 0;
`