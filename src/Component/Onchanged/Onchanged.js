import React, { Component } from 'react';

class Onchanged extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         onchangedValue: ''
      }
    }

    handleOnchanged = (e) => {
        this.setState({
            onchangedValue: e.target.value
        });
    }
    render() {
         
        return (
            <div>
                <input type="text" onChange={this.handleOnchanged} />
                <p>{this.state.onchangedValue}</p>
            </div>
        );
    }
}

export default Onchanged;