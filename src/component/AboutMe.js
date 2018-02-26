import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='aboutMeContainer'>
                <h1>葛瑞兵</h1>
                <div>一个工作快两年的前端彩笔，搭这个博客希望自己摆脱懒癌！</div>
            </div>
        )
    }
}

export default AboutMe