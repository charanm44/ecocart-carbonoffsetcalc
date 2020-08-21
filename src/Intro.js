import React, { Component } from 'react'
import './Intro.scss'

import Button from 'react-bootstrap/Button'

export class Intro extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div class="intro">
                <div class="header">Calculate your carbon footprint</div>
                <div class="subheader nudge-down">Find your environmental impact in less than 5 minutes</div>
                <Button className={'button-start'} onClick={() => this.props.handleClick()} variant="success">Get Started</Button>{''}
            </div>
        )
    }
}

export default Intro
