import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';
import * as serviceWorker from './serviceWorker';

var name="zahra"
const element= (
    <div > 
        <h1>salam {name}</h1>
        <p> {name}!</p>
    </div>
 );


function Welcome(props) {
    return (
        <div>
        <h1>salam zahra!</h1>
    </div>
    );
}

ReactDOM.render( <Welcome /> , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
