//https://reactstrap.github.io/ <--- librería para importar bootrap en REACT
import React from 'react';
import './Link.css'
//reactstrap permite usar Bootstrap en React (entre otras librerías)
//podemos importar un solo elemento en vez de toda la libreria usando llaves
import {Button} from 'reactstrap'

class Link extends React.Component {

    render() {
        return <Button className="mx-3" color="success"> {this.props.text} </Button>
        {/*return <a
                className="App-link"
                href={this.props.url}
                target={this.props.blank? "_blank" : "_self"}
                rel="noopener noreferrer"
                //style={{padding: 5}}
            >
            {this.props.text}
        </a>;*/}
    }
}

export default Link;