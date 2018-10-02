import React, {Component} from 'react';
import PersonClasses from './Person.css';

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
      <div className={PersonClasses.Person}>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }  
}

export default Person;