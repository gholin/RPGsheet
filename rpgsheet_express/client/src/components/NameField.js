import React, { Component } from 'react';
import '../styles/NameField.css';

class NameField extends Component {
  constructor(props) {
    super(props)
    // default value
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <label id='name-field' ref="name">
        Name:
        <input type="text" id="char-name" value={this.state.value} onChange={this.handleChange}/>
      </label>
    );
  }
}

export default NameField;
