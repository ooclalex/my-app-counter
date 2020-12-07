import React, { Component } from 'react';
import Counter from "./Counter";

class CounterGroup extends Component {
    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        console.log(Array.from(Array(number).keys()));
        return Array.from(Array(number).keys());

    };

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {
                    initArraySize.map((value) => 
                        <Counter add={this.props.add} />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;