import React from 'react';
import { Link } from 'react-router-dom'

export default function welcom( {name, email} ) {
    return (
        <div>
            Welcome, {name}. Your email is {email}.
            <Link to="/"><button type="button" >Back to home</button></Link>
        </div>
    )        
}