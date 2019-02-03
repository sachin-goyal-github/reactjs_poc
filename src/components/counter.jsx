import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    decrement = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <div>
                <span className='badge badge-info m-2'>{this.state.count}</span>
                <button onClick={this.increment} className='btn btn-info'>
                    +
                </button>
                <button onClick={this.decrement} className='btn btn-info'
                        disabled={this.state.count === 0}>
                    -
                </button>
            </div>
        );
    }
}