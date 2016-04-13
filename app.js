import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router'

import MessageBox from "./components/MessageBox.jsx";
import MyForm from "./components/MyForm.jsx";
import Container from "./components/Container.jsx";

global.hashHistory = hashHistory;

ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/message" component={MessageBox}/>
    <Route path="/form/:name" component={MyForm}/>
  </Router>,
  document.getElementById('container')
);
