import React, { Component } from 'react';
import './app.css';
import Books from './components/books';

class App extends Component{
  eventIncrement = (event) => {
    //console.log(event);
    this.setState({ count: this.state.count + 1 })
};
eventDecrement = (event) => {
    const count = this.state.count -1;
    this.setState({ count: count < 0 ? 0 : count });
};
eventDelete = (event) => {
    //console.log(event);
    this.setState({ count: 0})
};
  render(){
    return (
        <Books 
          onIncrement={this.eventIncrement}
          onDecrement={this.eventDecrement}
          onDelete={this.eventDelete}
          />
    );
  }
}

export default App;
