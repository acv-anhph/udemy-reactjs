import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const signedClasses = [];
  let btnClasses = '';

  if (props.showPerson) {
    btnClasses = classes.red;
  }

  if (props.persons.length <= 2) {
    signedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    signedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>test</h1>
      <p className={signedClasses.join(' ')}>This is really work</p>
      <button
        onClick={props.togglePersonhandler}
        className={btnClasses}
      >Toggle person
      </button>
    </div>
  );
};

export default cockpit;