import React, {Component} from 'react';
import PersonClasses from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/_Aux';
import PropTypes from 'prop-types';

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
    return (
      <Aux>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    );
  }  
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, PersonClasses.Person);