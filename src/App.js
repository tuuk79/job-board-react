import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import Clock from './Clock'
import { CardContent, Typography, CardActions, Grid } from '@material-ui/core';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            titleCount: 0
        }

        this.updateOtherTextbox = this.updateOtherTextbox.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.dragSomewhere = this.dragSomewhere.bind(this)
    }

		test() {
		}

    updateOtherTextbox(event) {
        this.setState({ value: event.target.value })
    }

    updateTitle() {
        this.setState({ titleCount: this.state.titleCount + 1 })
    }

    dragSomewhere(event) {
        this.setState({ titleCount: this.state.titleCount + 1 })
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.titleCount}</p>
                <input onChange={this.updateOtherTextbox} />
                <br />
                <input defaultValue={this.state.value} />
                <br />
                <Button variant="contained" color="secondary">
                    {this.state.value}
                </Button>
                <br />
                <Clock value={this.state.value} updateTitle={this.updateTitle} />
                <br></br>
                <Grid container spacing={40}>
                        <Card draggable="true" onDrag={this.dragSomewhere}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                        </Button>
                                <Button size="small" color="primary">
                                    Learn More
                        </Button>
                            </CardActions>
                        </Card>
                        <Card draggable="true" onDrag={this.dragSomewhere}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                        </Button>
                                <Button size="small" color="primary">
                                    Learn More
                        </Button>
                            </CardActions>
                        </Card>
                        <Card draggable="true" onDrag={this.dragSomewhere}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                        </Button>
                                <Button size="small" color="primary">
                                    Learn More
                        </Button>
                            </CardActions>
                        </Card>
                </Grid>

                <br></br>
            </div>
        )
    }
}

export default App;
