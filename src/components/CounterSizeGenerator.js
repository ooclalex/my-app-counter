import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor() {
        super();

        this.state = {
            size: 0
        };
    }

    onChange = (event) => {
        this.setState({size: event.target.value})
    };

    render() {
        return (
            <div>
                <input type="number" value={this.state.size} onChange={this.onChange} />
            </div>
        );
    }
}

export default CounterSizeGenerator;