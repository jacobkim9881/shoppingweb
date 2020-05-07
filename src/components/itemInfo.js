import React from 'react';
import styled from 'styled-components'

export default function itemInfo( {name, price }) {
    return(
        <Info>
            <Text>
            {name}
            </Text>
            <br/>
            <Text>
            Price: {price}
            </Text>
            <br/>
            <button>
                Buy
            </button>
        </Info>
    )
}

const Info = styled.div`
    height: 10rem;
    width: 10rem;
    position: absolute;
    display: inline-block;
    margin-left: 10rem;
`
const Text = styled.p`
    font-size: 1.5rem;
`