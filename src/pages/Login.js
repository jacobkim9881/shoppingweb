import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    state = {
        user: ""
    }

    handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/auth', {
            name: this.name.value,
            password: this.password.value
        })            
            .then(res => this.setState({ user: res.data  }))
    }

    render() {                
         return (
            <div>
            {this.state.user === "" ? 
                <form onClick={this.handleLogin}>
                    <input type="text" ref={ref=> { this.name = ref}} name="name" />
                    <input type="password" ref={ref => {this.password = ref}} name="password" />
                    <input type="submit" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />                
                    {this.state.user.name}
                </form> : 
                <div>
                    Hello, {this.state.user.name}
                </div>}         
            </div> 
         );                
    }
}

export default Login;