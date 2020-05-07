import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link, Switch, Route } from 'react-router-dom'
import store, { LOGGEDIN, LOGGEDOUT } from '../components/redux/redux'

class Login extends Component {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    state = {
        user: ''
    }

    handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/api/auth', {
            username: this.name.value,
            password: this.password.value
        })            
            .then(res => {
                this.setState({
                user: res.data
                })
                store.dispatch({ 
                    type: LOGGEDIN,
                    id: res.data.id,
                    username: res.data.username
                })
        })           
    }
    handleLogout() {
        this.setState({
            user: ""
        })
        store.dispatch({ type: LOGGEDOUT});
    }

    render() {        
         return (
             <Switch>
                 <Route to="/">
                     <Main>
                         <br /><br /><br /><br /><br />
                        {this.state.user === '' ? 
                            <form onSubmit={this.handleLogin}>
                                <input type="text" 
                                    ref={ref=> {this.name = ref}} 
                                    name="name"
                                    value="test" />

                                <input type="password" 
                                ref={ref => {this.password = ref}} 
                                name="password" 
                                value="test" />

                                <input type="submit" /> 
                                <StyledLink to="/join" >make your account here </StyledLink>                    
                            </form> : 
                            <div>
                                Hello, {this.state.user.username} 
                                <Logout onClick={this.handleLogout}> Log out </Logout> 
                                <StyledLink to={`/edit/${this.state.user.id}`}>Edit your account</StyledLink>                               
                            </div>}
                            <StyledLink to={`/admin`}>Add items to sell</StyledLink>
                        </Main>
                    </Route>
                </Switch>
         );                
    }
}

export default Login;

const skyblue = "color: hsl(200, 100%, 70%);"

const StyledLink = styled(Link)`
font-size: 10px;
&:visited {
    ${skyblue}
}
&:hover {
    ${skyblue}
}
&: link {
    ${skyblue}
}
`
const Logout = styled.span`
    cursor: pointer;
    ${skyblue}
`
const Main = styled.div`
margin: 0 auto;
width: 70%;
`