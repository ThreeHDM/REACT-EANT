//Este archivo es mi aplicación principal
//todo componente debe importar react
import React from 'react';
//si el archivo es .js o .jsx no necesita el formato
import Logo from './components/Logo'
import Link from './components/Link'
import Menu from './components/Menu'
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

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Logo category="abstract" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link url = "https://reactjs.org" blank={false} text="Documentación"/>
            < Link url = "https://google.com"
            blank = {
              false
            }
            text = "Otro link" />
              {
                <Menu items={links} />
              }
          </header>
        </div>
    )
  }
    
    
  
}


//Todo componente debe tener esta expresión al final. Permite hacer un import en otro archivo
export default App;
