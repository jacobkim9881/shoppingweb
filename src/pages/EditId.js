import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import idN from '../components/util'
import store, { LOGGEDOUT } from '../components/redux/redux'

class EditId extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    state = {
    }

    handleEdit(e) {        
        let id = idN(window.location.pathname)
        e.preventDefault();        
        axios.put('http://localhost:3001/api/edit/' + id, {
            password: this.pwd.value,
            email: this.email.value
        })
    }

    handleDelete() {
        let id = idN(window.location.pathname)
        let confirmed = window.confirm('Are you sure to delete your account?');
        if (confirmed === true) {
            axios.delete('http://localhost:3001/api/delete/' + id)
            .then(res => {                
                if(res.status !== 200) {
                    console.log(res);
                } else {
                    alert('Your account is deleted!');
                    store.dispatch({ type: LOGGEDOUT });               
                    window.history.back();
                }
            });            
        } 
    }

    render() {                        
        return (
            <div>
            <br /><br /><br /><br />
            <form onSubmit={this.handleEdit}>
                <table>
                <tr>
                <Left>change password: </Left><th><input type="text" ref={ref => {this.pwd = ref}} name="password" /></th>
                </tr>
                <tr>
                <Left>change email: </Left><th><input type="text" ref={ref => {this.email = ref}} name="email" /></th>
                </tr>
                <tr>
                    <p onClick={this.handleDelete}>Delete account</p>
                </tr>
                <tr>
                <input type="submit" />                    
                </tr>
                </table>
            </form>                
        </div>
        );
    }
}

export default EditId;

const Left = styled.th`
text-align: left;
`