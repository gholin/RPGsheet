import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import '../styles/StatsForm.css';
import '../styles/StatGrid.css';
import '../styles/NameField.css';
import '../styles/SaveButton.css';

export default class NewCharacter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      stats: [
        {
          name: 'STR',
          base: 10,
          mod: 0,
        },
        {
          name: 'DEX',
          base: 10,
          mod: 0,
        },
        { // whole object is our 'stat'
          name: 'INT', // 'name' is our fieldName
          base: 10, // 'base' is our fieldName
          mod: 0, // 'mod' is our fieldName
        },
        {
          name: 'WIS',
          base: 10,
          mod: 0,
        },
        {
          name: 'CHA',
          base: 10,
          mod: 0,
        }
      ]
    }
  }

  handleNameChange(newValue) {
    this.setState(state => {
      return {
        ...state, // object spread (takes the content of this.state and adds all of it to newState, basically a shallow copy of the object)]
        name: newValue
      }
    });
  }
  // setState re-renders
  handleStatChange(statIndex, fieldName, newValue) {
    // When I change a field, I want to update the stat
    this.setState((state) => { // https://reactjs.org/docs/react-component.html#setstate
      let newState = {...state} // object spread (takes the content of this.state and adds all of it to newState, basically a shallow copy of the object)]
      newState.stats[statIndex][fieldName] = newValue

      return newState
    });
  }

  render() {
    return (
      <Form id='full-form'>
        {/*<div><NameField/></div>*/}
        <label id='name-field'>
          Name:
          <input type="text" id="char-name" ref="name" onChange={(event) => this.handleNameChange(event.target.value)}/>
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
            { this.state.stats.map((stat, index) =>
              <tr key={index}>
                <td>{stat.name}</td>
                <td>
                  <input
                    type="number"
                    value={stat.base}
                    onChange={(event) => this.handleStatChange(index, 'base', event.target.value)}/>
                </td>
                <td>+</td>
                <td>
                  <input
                    type="number"
                    value={stat.mod}
                    onChange={(event) => this.handleStatChange(index, 'mod', event.target.value)}/>
                </td>
                <td>=</td>
                <td><input type="number" readOnly value={parseFloat(stat.base) + parseFloat(stat.mod)}/></td>
              </tr>
            )}
          </tbody>
        </Table>

        {/*<div><SaveButton/></div>*/}
        <Button
          variant="primary"
          type="button"
          id="save"
          onClick={() => this.props.onSave(this.state)}>Save</Button>
      </Form>
    );
  }
}
