import React from 'react';
import styled from 'styled-components'

export default function Home() {
    return (
        <Main>
            Hello, this is home!
        </Main>
    )
}

const Main = styled.div`
position: relative;
top: 100px;
margin: 0 auto;
background-color: hsla(0, 100%, 0%, 0.5);
width: 100%;
`