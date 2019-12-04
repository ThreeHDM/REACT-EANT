//Este archivo es mi aplicación principal
//todo componente debe importar react
import React from 'react';
//si el archivo es .js o .jsx no necesita el formato
import Logo from './components/Logo'
import Menu from './components/Menu'
import Mapa from './components/Mapa'
import Video from './components/Video'
//import  Producto from './components/Producto'
import Gondola from './components/Gondola'

import './App.css';

const links = [
  {
    url: "https://reactjs.org",
    blank: true,
    text: "Documentación"
  },
  {
    url: "https://google.com",
    blank: false,
    text: "Google"
  },
  {
    url: "https://twitter.com",
    blank: false,
    text: "twitter"
  }
]

class App extends React.Component {

  constructor(){
    //importante. invocar al constructor superior con super()
    super();

    this.state = {
      isLoaded : false
    }

  }

  componentDidMount(){
    //fetch("OBTAIN THE DATA").then(CONVERSION).then(UTILIZACION);
    fetch("https://api.myjson.com/bins/1giaf3")
    .then(rta => rta.json())
    .then(data => {
      this.setState({productos : data, isLoaded: true})
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Logo category="abstract" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
              <Menu items={links} />
              <Mapa lat="-34.6078602" long="-58.383111" zoom="15"/>
              <Video id="-IpvJZuX_Vk" play={true} mute={true}/>
              {!this.state.productos ? <p>Cargando...</p> : <Gondola productos={this.state.productos} />}            
          </header>
        </div>
    )
  }
    
    
  
}


//Todo componente debe tener esta expresión al final. Permite hacer un import en otro archivo
export default App;
