import React, { Component, PropTypes } from 'react';
import '../styles/App.css';

import Container from 'react-bootstrap/Container'

import Title from './Title'
import Avatar from './Avatar'
// import NameField from './NameField'
// import SaveButton from './SaveButton'
import StatsForm from './StatsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Title/></div>
        <div><Avatar /></div>
        <div><StatsForm /></div>
      </div>
    );
  }
}

export default App;
