import React from 'react';
import ItemList from '../components/item'
import items from '../api/items.json'

export default function ListItems() {
    return (
        items.map(item => 
        <ItemList key={item.id} to={"/dress/showitem/" + item.id} src={item.photo} title={item.title} price="300" />
        )
    )
}