import React, { Component } from 'react';
import axios from 'axios'

class CreateItem extends Component {
    constructor() {
        super();
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(e) {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/item`, {
            title: this.title.value,
            price: this.price.value,
            photo: this.photo.value
        })
            .then(() => window.location.reload());
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>      
                <h3>Create Items</h3>          
                Item name: <input type="text" name="title" ref={ref => {this.title = ref}}/>| 
                Price: <input type="text" name="price" ref={ref => {this.price = ref}}/> | 
                Photo url: <input type="text" name="photo" ref={ref => {this.photo = ref}} />
                <input type="submit" />
            </form>
        );
    }
}

export default CreateItem;