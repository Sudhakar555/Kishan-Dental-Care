import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home/Home.jsx';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import * as serviceWorker from '../serviceWorker';
import App from './App'

const routes = (
    <BrowserRouter>
      
       <App/>
     
    </BrowserRouter>
  );
  

ReactDOM.render(
    routes,document.getElementById('root'));
serviceWorker.unregister();