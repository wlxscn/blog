import React, { Component } from 'react';
import './PersonCenter.scss'
import avatar from '../img/avatar.jpeg'
console.log('avatar:', avatar)
class PersonCenter extends Component {
    constructor (props) {
      super(props)
    }

    render () {
        return (
            <div className='personContainer'>
                <img className='logoContainer' src={avatar}/>
            </div>
        )
    }
}

export default PersonCenter