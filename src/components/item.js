import React, { Component } from 'react';

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Image from './image'

class item extends Component {
    render() {
        return (
            <Container >                
                <StyledLink to={this.props.to}>
                    <Image src={this.props.src} />
                    <br />
                    <Title>{this.props.title}</Title>
                    <br />
                    <Title>{this.props.price} EUR</Title>               
                </StyledLink>
            </Container>
        );
    }
}

export default item;

const Container = styled.div`
    height : 200px;
    width : 150px;
    text-decoration : none;
    & : visited {
        color : black;
    };
    & : link {
        color : black;
    };
    & : hover {
        color : red;
    };
`
const Title = styled.p`
    margin : 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`