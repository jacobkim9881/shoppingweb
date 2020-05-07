import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.onSignIn = this.onSignIn.bind(this);
    }
    
    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }

    render() {        
        return (
            <div>
                <div class="g-signin2" data-onsuccess={this.onSignIn} data-theme="dark">ddd</div>
            </div>
        );
    }
}

export default Test;