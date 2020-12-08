import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

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
                        <CounterContainer key={value} />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;