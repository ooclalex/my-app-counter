import React, { Component } from 'react';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterGroup from "./CounterGroup"

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
                <CounterGroupSumContainer sum={sum} />
                <CounterGroup size={size} add={this.add} />
            </div>
        );
    }
}

export default MultiCounter;