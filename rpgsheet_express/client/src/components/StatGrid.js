import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import '../styles/StatGrid.css';

export default class StatGrid extends Component {
  // constructor() {
  //   super();
  //   this.state = {character: []}
  // }
  //
  // componentDidMount() {
  //   fetch('/default-char')
  //     .then(res => res.json())
  //     .then(character => this.setState({ character }));
  // }

  render() {
    return (
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
            <td><input type="number" readOnly id="str-value"/></td>
          </tr>
          <tr id='dexterity'>
            <td>DEX</td>
            <td><input type="number" id="dex-base"/></td>
            <td>+</td>
            <td><input type="number" id="dex-mod"/></td>
            <td>=</td>
            <td><input type="number" readOnly id="dex-value"/></td>
          </tr>
          <tr id='intelligence'>
            <td>INT</td>
            <td><input type="number" id="int-base"/></td>
            <td>+</td>
            <td><input type="number" id="int-mod"/></td>
            <td>=</td>
            <td><input type="number" readOnly id="int-value"/></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
