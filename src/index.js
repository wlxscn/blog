import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <Router>
        <Route path='/blog' component={App}/> 
    </Router>,
    document.getElementById('root'));
