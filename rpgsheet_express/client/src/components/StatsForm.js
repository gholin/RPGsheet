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
import NewCharacter from './NewCharacter';

class StatsForm extends Component {
  constructor(props) {
    super(props)

    this.state = { character: {stats:[]} }
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

  // When saving, replaces old character with the newCharacter and re-renders
  replaceCharacter(newCharacter) {
    this.setState({character: newCharacter})
  }

  render() {
    return (
      <div>
        {/* Current Stats table */}
        <Table striped size="sm" id="current-table">
          <thead><tr><td>CURRENT STATS</td></tr></thead>
          <tbody>
            <tr><td>Name: {this.state.character.name}</td></tr>
            {this.state.character.stats.map((stat, index) =>
              <tr key={index}>
                <td>{stat.name}: {parseFloat(stat.base) + parseFloat(stat.mod)}</td>
              </tr>
            )}
            </tbody>
        </Table>

        <NewCharacter onSave={(newCharacter) => this.replaceCharacter(newCharacter)} />
      </div>
    );
  }
}

export default StatsForm;
