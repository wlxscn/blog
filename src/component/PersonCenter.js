import React, { Component } from 'react';
import styles from './PersonCenter.scss'
import avatar from '../img/avatar.jpeg'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
@withStyles(styles)
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