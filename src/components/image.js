import React from 'react'
import styled from 'styled-components'

export default function image({ src }) {
    return (
        <Image src={src}/>
    );
}

const Image = styled.img`    
    display: inline-block;
    height : 100%;     
`