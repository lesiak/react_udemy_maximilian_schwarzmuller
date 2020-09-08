import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

import personClasses from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render = () => {
    console.log('[Person.js] render');
    return (
      <>
        <AuthContext.Consumer>
          {(context) => (context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  };
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, personClasses.Person);
