import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutMe from './component/AboutMe'
import Markdown from './component/Markdown'
import Nav from './component/Nav'
import PersonCenter from './component/PersonCenter'
import Articles from './component/Articles'
import ArticleEdit from './component/ArticleEdit'
import Detail from './component/Detail'
import CanvasPicture from './component/CanvasPicture'
import { TransitionGroup, CSSTransition } from "react-transition-group"

class App extends Component {
  render() {
    const {match, location} = this.props
    return (
      <div className="App">

        <header className="App-header">
          <PersonCenter/>
          <Nav/> 
        </header>
        <div className='App-content'>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={2000}>
              <Switch location={location}>
                <Route path={`${match.path}/`} exact={true} component={Articles}/> 
                <Route path={`${match.path}/edit`} exact={true} component={ArticleEdit}/> 
                <Route path={`${match.path}/aboutMe`} component={AboutMe}/> 
                <Route path={`${match.path}/articles`} component={Articles}/> 
                <Route path={`${match.path}/detail/:id`} component={Detail}/> 
              </Switch>  
            </CSSTransition>  
          </TransitionGroup>  
        </div>

      </div>
    );
  }
}

export default App;
