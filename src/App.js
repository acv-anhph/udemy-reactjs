import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'hoang anh', age: 29},
            {name: 'ngan ha', age: 29},
            {name: 'dau dau', age: 2},
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 29},
                {name: 'ngan ha', age: 29},
                {name: 'dau dau', age: 2},
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>test</h1>
                <button onClick={this.switchNameHandler.bind(this, 'new hoang anh')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>My hobbie is playing game</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>

                </Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>
                </Person>
            </div>
        )
    }
}

export default App;
