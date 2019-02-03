import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <div className='m-4'>
                <span className='badge badge-info m-1'>{this.props.counter.count}</span>
                <button onClick={this.props.onIncrement} className='btn btn-info m-1'>
                    +
                </button>
                <button onClick={this.props.onDecrement} className='btn btn-info m-1'
                        disabled={this.props.counter.count === 0}>
                    -
                </button>
                <button onClick={this.props.onDelete}
                        disabled={this.props.totalCounters === 1}
                        className='btn btn-danger m-1'>
                    Delete
                </button>
            </div>
        );
    }
}