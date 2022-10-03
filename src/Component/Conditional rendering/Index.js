import React, { Component } from 'react'
import Home from './Home'
import LoggedIn from './LoggedIn'

export default class Index extends Component {
constructor(props) {
  super(props)

  this.state = {
     IsLoggedIn: true
  }
}

render() {
    const {IsLoggedIn} = this.state;
    return(
        <div>
            {IsLoggedIn ? <LoggedIn /> : <Home />}
        </div>
    )
}
}