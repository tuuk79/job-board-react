import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export class Clock extends Component {
    render() {
        return (
            <div>
                <div>{this.props.value}</div>
                <Button variant="contained" color="primary" onClick={this.props.updateTitle}>
                    Change App Title
                </Button>
            </div>

        )
    }
}

export default Clock