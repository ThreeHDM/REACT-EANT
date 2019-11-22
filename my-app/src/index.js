//Si es via from lo saca de node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//En este caso no hace falta agregar el .js
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//El archivo index.js toma al componente app y lo incrusta en la interfaz