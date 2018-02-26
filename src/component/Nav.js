import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Nav.less'

class Nav extends Component {
    navTabs = [
        {name: '主页', path: '/blog/'},
        {name: '关于我', path: '/blog/aboutMe'},
        {name: '文章列表', path: '/blog/articles'}
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