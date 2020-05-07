import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import CreateItem from '../components/CreateItem'
import ListItems from './ListItems'

class Admin extends Component {
    constructor() {
        super();
        this.reqPutItem = this.reqPutItem.bind(this);
    }
    state = {
        items: []
    }

    handleDelete(e) {
        e.preventDefault();
        let id = e.target.children[0].innerText;                
        axios.delete(`http://localhost:3001/api/item/delete/${id}`)
            .then(() => window.location.reload());
    }

    reqPutItem(e) {        
        e.preventDefault();
        let id = e.target.children.id.innerText;     
        axios.put(`http://localhost:3001/api/item/${id}`, {
            title: this.title.value,
            price: parseInt(this.price.value, 10),
            photo: this.photo.value
        })        
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/item')
            .then((res) => {
                this.setState({ items: res.data })
            })
    }

    render() {        
        return (
            <div>                
                <ul>
                    {this.state.items.map((item) => 
                        <li key={item.id}>
                            <form onSubmit={this.reqPutItem}>
                    ID: <span name="id">{item.id}</span> | 
                            Item name: <input type="text" name="title" defaultValue={item.title} ref={ref => {this.title = ref}}/>| 
                            Price: <input type="text" name="price" defaultValue={item.price} ref={ref => {this.price = ref}}/> | 
                            Photo url: <input type="text" name="photo" defaultValue={item.photo} ref={ref => {this.photo = ref}} />
                            <input type="submit" />
                            <Delete onClick={this.handleDelete} ><IdValue>{item.id}</IdValue>Delete</Delete>
                            </form>
                            </li>
                     )
                    }
                </ul>                           
                <CreateItem />
                <ItemLists />
            </div>
        );
    }
}

export default Admin;

const ItemLists = styled(ListItems)`
display: inline-block;
`

const Delete = styled.span`
color: red;
cursor: pointer;
`

const IdValue = styled.span`
display: none;
`