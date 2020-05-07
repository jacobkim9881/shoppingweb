import React, {Component} from 'react';
import axios from 'axios'

import ItemList from '../components/item'

class ListItems extends Component {
    constructor() {
        super();
    }
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/item')
            .then((res) => {
                this.setState({ items: res.data })
            })
    }

    render() {
        return (
            this.state.items.map(item => 
            <ItemList key={item.id} to={"/dress/showitem/" + item.id} src={item.photo} title={item.title} price={item.price} />
            )
        )
    }
}

export default ListItems;