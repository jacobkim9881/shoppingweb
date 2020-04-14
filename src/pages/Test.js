import React, { Component } from 'react';
import axios from 'axios';

const myurl = "http://localhost:3001/customers";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           api : []
       }
       this.postlogin = this.postlogin.bind(this);
}

    postlogin(event) {
        event.preventDefault();
        axios.post(myurl, {
            name: this.name.value,
            email: this.email.value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {        
        return (
            <div>
                <form onSubmit={this.postlogin}>
                <input ref={ref => {this.name = ref }} type="text" name="name" placeholder="Username" required />                
                <input ref={ref => {this.email = ref}} type="text" name="email" placeholder="Email" required />                
                <input type="submit"/>
                </form>                
            </div>
        );
    }
}

export default Home;