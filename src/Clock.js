import React, { Component } from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            value: 'not clicked'

        };
    }

    handleClick() {
        var out = 'clicked';
        if (this.state.value === 'clicked') {
            out = 'not clicked';
        }
        this.setState({
            value: out
        });
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div>
                <h1>  {this.props.country} </h1>

                <h1>  {this.state.time} </h1>
                <h1> <button onClick={() => this.handleClick()}>{this.state.value}</button>  </h1>
            </div>
        );
    }
}

export default Clock;
