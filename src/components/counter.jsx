import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        // it's called object destructuring
        const {onIncrement, onDecrement, onDelete, totalCounters, counter} = this.props;
        return (
            <div className='m-4'>
                <span className='badge badge-info m-1'>{counter.count}</span>
                <button onClick={onIncrement} className='btn btn-info m-1'>
                    +
                </button>
                <button onClick={onDecrement} className='btn btn-info m-1'
                        disabled={counter.count === 0}>
                    -
                </button>
                <button onClick={onDelete}
                        disabled={totalCounters === 1}
                        className='btn btn-danger m-1'>
                    Delete
                </button>
            </div>
        );
    }
}