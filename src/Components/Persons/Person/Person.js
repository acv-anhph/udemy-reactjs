import React, {Component} from 'react';
import PersonClasses from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] in constructor', props);
  }

  componentWillMount() {
    console.log('[person.js] in componentWillMount');
  }

  componentDidMount() {
    console.log('[person.js] in componentDidMount');
  }

  render() {
    console.log('[person.js] in render');
    return (
      <WithClass classes={PersonClasses.Person}>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
    );
  }  
}

export default Person;