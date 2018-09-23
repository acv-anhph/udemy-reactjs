import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>test</h1>
        <Person name='hoang anh'>My hobbie is playing game</Person>
        <Person name='ngan ha'></Person>
        <Person name='dau dau'></Person>
      </div>
    )
  }
}

export default App;
