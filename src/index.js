import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Game from './homework_2/Game';

//homework_1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//homework_2
const tree = ReactDOM.createRoot(document.querySelector('#tree'));
tree.render(
  <Game />
)
