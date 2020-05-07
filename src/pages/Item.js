import React from 'react';
import { useParams } from 'react-router-dom'

import Image from '../components/image'
import Review from '../components/Review'
import Items from '../api/items.json'
import ItemInfo from '../components/itemInfo'

export default function Item() {    
    let id = useParams();        
    let num = id.id - 1;
    return (            
        <div>            
            <Image src={Items[num].photo} />           
            <ItemInfo name={Items[num].title} price={Items[num].price} />
            <br />
            <Review />
        </div>
    );
}