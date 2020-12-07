import React, { Component } from 'react';
import CounterGroup from "./CounterGroup"
import CounterGroupSum from "./CounterGroupSum"

class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
            sum: 0
        };
    }
    onChange = (event) => {
        this.setState({size: event.target.value})
    };

    add = (value) => {
        this.setState((prevState) => ({sum: prevState.sum + value}));
    }

    render() {
        const size = this.state.size;
        const sum = this.state.sum;
        return (
            <div>
                <input type="number" value={size} onChange={this.onChange} />
                <CounterGroupSum sum={sum} />
                <CounterGroup size={size} add={this.add} />
            </div>
        );
    }
}

export default MultiCounter;