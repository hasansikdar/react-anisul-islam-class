import React, { Component } from 'react';
import '../../App.css'
class State extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count: 0
     }
     
   }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        const {Mount, count} = this.state;
        
        return (
            <div className='count'>
                <h4>Count: {count}</h4>
                <button onClick={this.handleIncrement} disabled={count === 5 ? true:false}>+</button>
                <button onClick={this.handleDecrement} disabled={count === 0 ? true:false}>-</button>
            </div>
        );
    }
}

export default State;