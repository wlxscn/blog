import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutMe from './component/AboutMe'
// import Markdown from './component/Markdown'
import Nav from './component/Nav'
import PersonCenter from './component/PersonCenter'
// import Articles from './component/Articles'
// import ArticleEdit from './component/ArticleEdit'
// import Detail from './component/Detail'
// import { TransitionGroup, CSSTransition } from "react-transition-group"

class App extends Component {
  render() {
    const {location} = this.props
    return (
      <div className="App">

        <header className="App-header">
          <PersonCenter/>
          <Nav/> 
        </header>
        <div className='App-content'>
            <Switch location={location}>
              {/* <Route path='/' exact={true} component={Articles}/> 
              <Route path='/edit' exact={true} component={ArticleEdit}/>  */}
              <Route path='/aboutMe' component={AboutMe}/> 
              {/* <Route path='/articles' component={Articles}/> 
              <Route path='/detail/:id' component={Detail}/>  */}
            </Switch>   
        </div>

      </div>
    );
  }
}

export default App;
