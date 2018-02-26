import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './component/AboutMe'
import Markdown from './component/Markdown'
import Nav from './component/Nav'
import PersonCenter from './component/PersonCenter'
import Articles from './component/Articles'
import Detail from './component/Detail'

class App extends Component {
  render() {
    const {match} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <PersonCenter/>
          <Nav/> 
        </header>
        <div className='App-content'>
          <Route path={`${match.path}/`} exact={true} component={Articles}/> 
          <Route path={`${match.path}/aboutMe`} component={AboutMe}/> 
          <Route path={`${match.path}/articles`} component={Articles}/> 
          <Route path={`${match.path}/detail/:id`} component={Detail}/> 
        </div>
      </div>
    );
  }
}

export default App;
