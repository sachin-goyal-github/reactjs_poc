import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: this.props.count
    };

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    decrement = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <div className='m-4'>
                <span className='badge badge-info m-1'>{this.state.count}</span>
                <button onClick={this.increment} className='btn btn-info m-1'>
                    +
                </button>
                <button onClick={this.decrement} className='btn btn-info m-1'
                        disabled={this.state.count === 0}>
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.id)}
                        disabled={this.props.totalCounters === 1}
                        className='btn btn-danger m-1'>
                    Delete
                </button>
            </div>
        );
    }
}