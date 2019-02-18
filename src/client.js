import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import createStore from "./store";
const store = createStore( window.REDUX_DATA );

ReactDOM.hydrate(
    <ReduxProvider store={ store }> 
      <Router>
        <Route path='/' component={App}/> 
      </Router>
    </ReduxProvider>,
    document.getElementById('root')
)
