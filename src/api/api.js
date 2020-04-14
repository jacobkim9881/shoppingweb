import React, { Component } from 'react';
import axios from 'axios';

class api extends Component {
    constructor(props) {
        super(props);
        this.state = {
           api : [],
           name : "",
           email : "",
           test : "test"
       }
    this.putName = this.putName.bind(this);
    this.putEmail = this.putEmail.bind(this);
    this.createAcc = this.createAcc.bind(this);   
}

componentDidMount() {        
    axios.get("http://localhost:3001/customers")            
        .then( res => {
            this.setState({ api : res.data })
        });
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default api;