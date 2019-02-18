import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from './component/Nav'
import PersonCenter from './component/PersonCenter'
import { routes } from './route'
import styles from './App.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

@withStyles(styles)
class AppContent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PersonCenter />
          <Nav />
        </header>

        <div className='App-content'>
          <Switch>
            {
              routes.map((route) => (
                <Route key={route.path} path={route.path} exact component={route.component} />
              ))
            }
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppContent;
