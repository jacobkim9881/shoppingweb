import React from 'react';
import { useParams } from 'react-router-dom'

import Image from '../components/image'
import Review from '../components/Review'
import Items from '../api/items.json'

export default function Item() {    
    let id = useParams();        
    let num = id.id - 1;
    return (            
        <div>            
            <Image src={Items[num].photo} />           
            <br />
            <Review />
        </div>
    );
}