import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Welcome from '../components/welcom'

class JoinIn extends Component {
    constructor() {
        super();
        this.handleCreate = this.handleCreate.bind(this);
        this.deleteState = this.deleteState.bind(this);
    }
    state = {
        username: null,
        email: null
    }

    handleCreate(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/api", {
            username: this.username.value,
            password: this.password.value,
            email: this.email.value
        })
            .then(() => this.setState({
                username: this.username.value,
                email: this.email.value
            }))
    }

    deleteState() {
        this.setState({
            username: null,
            email: null
        })
    }

    render() {        
        return (
        <Form onSubmit={this.handleCreate}>     
            <br /><br /><br />            
            {this.state.username == null ? 
            <table>
            <tr>
            <Left>ID : </Left>  <th><input type = "text" ref={ref => {this.username = ref}} name="username" /></th>
            </tr>
            <tr>                
            <Left>Password : </Left>    <th><input type = "password" ref={ref => {this.password = ref}} name="password" /></th>
            </tr>
            <tr>                
            <Left>Email : </Left>   <th><input type = "text" ref={ref => {this.email = ref}} name="email" /></th>
            </tr>
            <tr>                
            <th></th><th><input type="submit" /></th>
            </tr>            
            </table> : 
            <Welcome onClick={this.deleteState} name={this.state.username} email={this.state.email} />
        }
        </Form>        
        );
    }
}

export default JoinIn;

const Form = styled.form`
width: 20rem;
height: 15rem;
`
const Left = styled.th`
text-align: left;
`