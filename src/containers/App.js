import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);

  }

  state = {
    persons: [
      {id: 'dsfsdfsdf3423', name: 'hoang anh', age: 29},
      {id: 'dsfsdfsdf342vds3', name: 'ngan ha', age: 29},
      {id: 'dsfsdfsdf34s23', name: 'dau dau', age: 2},
    ],
    showPerson: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonhandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  nameChangedhandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedhandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          togglePersonhandler={this.togglePersonhandler}
        />
        {persons}
      </div>
    )
  }
}

export default App;
