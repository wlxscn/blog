import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import styles from './Nav.scss'

class Nav extends Component {
    navTabs = [
        {name: '主页', path: '/'},
        {name: '关于我', path: '/aboutMe'},
        {name: '文章列表', path: '/articles'}
    ]

    constructor (props) {
        super(props)
    }

    render () {
        return (
          <div className='navContainer'>
              {this.navTabs.map((tab) => (
                  <div className='navTab' key={tab.name}>
                      <NavLink exact={true} to={tab.path}>{tab.name}</NavLink>
                  </div>
              ))}
          </div>
        )
    }
}

export default Nav