import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App url="http://35.154.154.41:7500/v1/salesExecutive/dashboard/1" url2="http://35.154.154.41:7500/v1/salesExecutive/dashboard/2" url3="http://35.154.154.41:7500/v1/salesExecutive/dashboard/3"/>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
