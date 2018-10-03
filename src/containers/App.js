import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/_Aux';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[app.js] in constructor', props);

    this.state = {
      persons: [
        {id: 'dsfsdfsdf3423', name: 'hoang anh', age: 29},
        {id: 'dsfsdfsdf342vds3', name: 'ngan ha', age: 29},
        {id: 'dsfsdfsdf34s23', name: 'dau dau', age: 2},
      ],
      showPerson: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[app.js] in componentWillMount');
  }

  componentDidMount() {
    console.log('[app.js] in componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPerson !== this.state.showPerson;
  // }


  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('[Update App.js] inside componentDidUpdate', prevProps, prevState);
  }

  // state = {
  //   persons: [
  //     {id: 'dsfsdfsdf3423', name: 'hoang anh', age: 29},
  //     {id: 'dsfsdfsdf342vds3', name: 'ngan ha', age: 29},
  //     {id: 'dsfsdfsdf34s23', name: 'dau dau', age: 2},
  //   ],
  //   showPerson: false
  // };

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
    this.setState((prevState, props) => {
      return {
        showPerson: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    })
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
    console.log('[app.js] inside render()');
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedhandler}/>;
    }

    return (
      <Aux classes={classes.App}>
        <button onClick={() => {
          this.setState({showPerson: true})
        }}>Show persons</button>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          togglePersonhandler={this.togglePersonhandler}
        />
        {persons}
      </Aux>
    )
  }
}

export default withClass(App, classes.App);
