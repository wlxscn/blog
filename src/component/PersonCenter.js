import React, { Component } from 'react';
import './PersonCenter.less'

class PersonCenter extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='personContainer'>
                <div className='logoContainer'>
                </div>
                <div>会思想的猪</div>
            </div>
        )
    }
}

export default PersonCenter