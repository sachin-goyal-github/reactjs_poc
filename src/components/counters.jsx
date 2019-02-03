import React, {Component} from 'react';
import Counter from './counter'

export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, count: 0},
            {id: 2, count: 1}
        ]
    };

    deleteCounter = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters: counters});
    };

    render() {
        return (
            <div>
                {
                    this.state.counters.map(
                        counter => (
                            <Counter key={counter.id} id={counter.id} count={counter.count}
                                     totalCounters={this.state.counters.length}
                                     onDelete={this.deleteCounter}/>
                        )
                    )
                }
            </div>
        );
    }

}