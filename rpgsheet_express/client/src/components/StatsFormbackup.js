import React, { Component } from 'react';
// import NameField from './NameField'
// import SaveButton from './SaveButton'
// import StatGrid from './StatGrid'
import Form from 'react-bootstrap/Form'
import '../styles/StatsForm.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import '../styles/StatGrid.css';
import '../styles/NameField.css';
import '../styles/SaveButton.css';

class StatsForm extends Component {
  constructor(props) {
    super(props)

    this.state = { character: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Fetches default character JSON from back end upon mounting
    fetch('/character')
      .then(res => res.json())
      .then(character => this.setState({ character }))
      .then ((responseJson) => {
        console.log(responseJson);})
  }

  handleChange(event) {
    // When I change a field, I want to update what's in total value
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // When I hit the save button, I want the following to happen:
    // 1. Set value of any blank Base or Mod fields to 0.
    // 2. Set value of a blank name to default character's name from backend json
    // 3. For each stat, add the Base and Mod together and put the total into value
    // 4. Save the stat values and names into the character
    // 5. Display a
    // 6. Render a Toast to say save was successful


    alert('Character:' + this.state.character);
    event.preventDefault();

    // this.setState({character: event.target.value});
    //
    //   this.character.str = this.refs.strength.value;
    //   this.character.dex = this.refs.dexterity.value;
    //   this.character.int = this.refs.intelligence.value;
      // alert('A character was submitted: ' + this.state.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id='full-form'>

        {/* Play around with accessing character values */}
        <Table striped size="sm" id="current-table">
          <thead>CURRENT STATS</thead>
          <tbody>
            <tr>Name: {this.state.character.name}</tr>
            <tr>STR: {this.state.character.str}</tr>
            <tr>DEX: {this.state.character.dex}</tr>
            <tr>INT: {this.state.character.int}</tr>
            </tbody>
        </Table>

        {/*<div><NameField/></div>*/}
        <label id='name-field'>
          Name:
          <input type="text" id="char-name" ref="name" onChange={this.handleChange}/>
        </label>

        {/*<div><StatGrid/></div>*/}
        <Table bordered size="sm" id="stat-table">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Base</th>
              <th>+</th>
              <th>Mods</th>
              <th>=</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr id='strength'>
              <td>STR</td>
              <td><input type="number" id="str-base"/></td>
              <td>+</td>
              <td><input type="number" id="str-mod"/></td>
              <td>=</td>
              <td><input type="number" readOnly id="str-value" ref="strength"/></td>
            </tr>
            <tr id='dexterity'>
              <td>DEX</td>
              <td><input type="number" id="dex-base"/></td>
              <td>+</td>
              <td><input type="number" id="dex-mod"/></td>
              <td>=</td>
              <td><input type="number" readOnly id="dex-value" ref="dexterity"/></td>
            </tr>
            <tr id='intelligence'>
              <td>INT</td>
              <td><input type="number" id="int-base"/></td>
              <td>+</td>
              <td><input type="number" id="int-mod"/></td>
              <td>=</td>
              <td><input type="number" readOnly id="int-value" ref="intelligence"/></td>
            </tr>
          </tbody>
        </Table>

        {/*<div><SaveButton/></div>*/}
        <Button variant="primary" type="submit" id="save">Save</Button>
      </Form>
    );
  }
}

export default StatsForm;
