import React, { Component } from 'react'
import './Home.scss'

import DynamicForm from './DynamicForm'
import Intro from './Intro'

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showForm: false,
            isAtSummary: false
        }
    }

    render() {
        return (
        <div className={'homebox'}>
            <div className={'home'} style={this.state.isAtSummary ? { backgroundImage: 'none' } : {}}>
                <div className={'home-content'}>
                    {
                        !this.state.showForm
                            ? <Intro handleClick={() => this.setState({ showForm: !this.state.showForm })}></Intro>
                            : <DynamicForm handleSubmit={() => this.setState({ isAtSummary: true })}></DynamicForm>
                    }
                </div>
            </div >
        </div>
        )
    }
}

export default Home
