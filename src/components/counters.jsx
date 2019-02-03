import React, {Component} from 'react';
import Counter from './counter'

export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, count: 0},
            {id: 2, count: 9},
            {id: 3, count: 10},
            {id: 4, count: 2}
        ]
    };

    resetCounters = () => {
        const countersCopy = [...this.state.counters];
        countersCopy.forEach(counter => counter.count = 0);
        this.setState({counters: countersCopy});
    };

    deleteCounter = (counterId) => {
        let countersCopy = [...this.state.counters];
        countersCopy = countersCopy.filter(counter => counter.id !== counterId);
        this.setState({counters: countersCopy});
    };

    incrementCounter = (counterId) => {
        const countersCopy = [...this.state.counters];
        const index = countersCopy.findIndex(counter => counter.id === counterId);
        countersCopy[index].count++;
        this.setState({counters: countersCopy});
    };

    decrementCounter = (counterId) => {
        const countersCopy = [...this.state.counters];
        const index = countersCopy.findIndex(counter => counter.id === counterId);
        countersCopy[index].count--;
        this.setState({counters: countersCopy});
    };

    render() {
        return (
            <div>
                {
                    this.state.counters.map(
                        counter => (
                            <Counter key={counter.id} counter={counter}
                                     totalCounters={this.state.counters.length}
                                     onIncrement={() => this.incrementCounter(counter.id)}
                                     onDecrement={() => this.decrementCounter(counter.id)}
                                     onDelete={() => this.deleteCounter(counter.id)}/>
                        )
                    )
                }
                <button className='btn-danger' onClick={this.resetCounters}>Reset All</button>
            </div>
        );
    }

}