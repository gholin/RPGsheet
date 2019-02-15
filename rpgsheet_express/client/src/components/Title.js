import React, { Component } from 'react';
import '../styles/Title.css';
// Simple Title Component
export default class Title extends Component {
  constructor(props) {
    super() // would pass in props here if I needed this.props in constructor
  }

  render() {
    return (
      <h1 id='title-bar'>{this.props.textProp}</h1>
    );
  }
}

Title.defaultProps = {
   textProp: 'Cyberpunk RPG Character Sheet',
}
