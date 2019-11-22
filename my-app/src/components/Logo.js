import React from 'react';
//import logo from './logo.svg';

class Logo extends React.Component {
    
    render(){
        return <img
        src = {`https://lorempixel.com/480/640/${this.props.category}`}
        className = "App-logo"
        alt = "logo" />;
    }
}

export default Logo;