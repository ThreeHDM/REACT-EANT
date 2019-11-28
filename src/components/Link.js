import React from 'react';
import './Link.css'

class Link extends React.Component {

    render() {
        return <a
                className="App-link"
                href={this.props.url}
                target={this.props.blank? "_blank" : "_self"}
                rel="noopener noreferrer"
                //style={{padding: 5}}
            >
            {this.props.text}
        </a>;
    }
}

export default Link;