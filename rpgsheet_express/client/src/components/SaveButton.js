import React, { Component } from 'react';
import '../styles/SaveButton.css';
import Button from 'react-bootstrap/Button';

class SaveButton extends Component {
  render() {
    return (
      <Button variant="primary" type="submit" id="save">Save</Button>
    );
  }
}
  // <Button variant="primary" id="save" value="Save" />
export default SaveButton;
