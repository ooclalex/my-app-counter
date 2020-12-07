import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        const sum = this.props.sum;
        return (
            <div>
                <p>Sum: {sum}</p>
            </div>
        );
    }
}

export default CounterGroupSum;