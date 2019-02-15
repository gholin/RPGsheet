<div><NameField/></div>
<div><StatGrid/></div>
<div><SaveButton/></div>



<Form onSubmit={this.handleSubmit} id='full-form'>
  <label id='name-field'>
    Name:
    <input type="text" id="char-name" ref="name" onChange={this.handleChange}/>
  </label>
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
  <Button variant="primary" type="submit" id="save">Save</Button>
</Form>

<div id='full-form'>
    <h1>Character:</h1>
    <p>Hello, I'm {this.state.character.name}!</p>
</div>



calculateValue() {
  if (this.refs.name.value == "")
    this.refs.name.value = 'default';
  var i;
  for (i = 0; i < values.length; i++) {
    if ()
  }

}

const values = {}[this.refs.name.value,
  this.refs.strength.value,
  this.refs.dexterity.value,
  this.refs.intelligence.value
];
function setZeroValues(stat_code) {
  if (getBaseValue(stat_code) == "") {
    getBase(stat_code).value = ZERO;
  }
  if (getModValue(stat_code) == "") {
    getMod(stat_code).value = ZERO;
  }
};

setValue(stat_code) {
  setZeroValues(stat_code);
  var base = getBaseValue(stat_code);
  var mod = getModValue(stat_code);
  var total = parseFloat(base)+parseFloat(mod);

  if(isNaN(total)) {
    document.getElementById(`${stat_code}-value`).innerHTML="Invalid stats.";
    total = 0;
  }
  document.getElementById(`${stat_code}-value`).value = total;
  return total;
}



      var character = {
        name: this.refs.name.value,
        str: this.refs.strength.value,
        dex: this.refs.dexterity.value,
        int: this.refs.intelligence.value,
        skills: ['living'],

        // methods
        buildJSON: function() {
          return JSON.stringify(this);
        }
      };

        componentDidMount() {
          fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }
    renders user list
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );

    // Old default render
    // render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );
    // }
