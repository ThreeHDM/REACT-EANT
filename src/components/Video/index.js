import React from 'react';

class Video extends React.Component {
    
    render(){
        return <iframe title="iframe" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.id}?autoplay=${this.props.play ? "1" : "0"}&mute=${this.props.mute ? "1" : "0"}`} frameBorder="0" allow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`} allowFullScreen></iframe>;
    }
}

export default Video;