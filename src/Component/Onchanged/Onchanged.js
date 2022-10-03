import React, { Component } from 'react';

class Onchanged extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         onchangedValue: ''
      }
    }

    handleText = (e) => {
       this.setState({
        onchangedValue: e.target.value
       })
    }

    render() {
        return (
            <div>
                <input type="text"  onChange={this.handleText}  />
                <p>{this.state.onchangedValue}</p>
            </div>
        );
    }
}

export default Onchanged;