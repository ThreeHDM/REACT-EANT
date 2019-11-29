import React from 'react';
import './style.css'

class Mapa extends React.Component {
    
    render(){
        return <iframe title="iframe_mapa" id="mapa" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${this.props.zoom * 1000}!2d${this.props.long}!3d${this.props.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1574809884625!5m2!1ses!2sar`}></iframe>;
    }
}

export default Mapa;