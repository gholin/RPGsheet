const ZERO = 0;
//character object
// these are two ways to create a blank object
// var character = new Object();
// var character = {};
// character.str = document.getElementById(`${str}-value`).value;
// function Character(name)
var character = {
  name: 'default person',
  str: 10,
  dex: 10,
  int: 10,
  skills: ['living'],

  // methods
  buildJSON: function() {
    return JSON.stringify(this);
  }
};
// Arrow Methods
var getBase = (stat_code) => document.getElementById(`${stat_code}-base`);
var getBaseValue = (stat_code) => getBase(stat_code).value === "" ? ZERO : getBase(stat_code).value;
var getMod = (stat_code) => document.getElementById(`${stat_code}-mod`);
var getModValue = (stat_code) => getMod(stat_code).value === "" ? ZERO : getMod(stat_code).value;
// var getName = () => document.getElementById('char-name').value == "" ? character.name : document.getElementById('char-name').value;
var getName = () => document.getElementById('char-name');
// var buildJSON = () => JSON.stringify(character);

// If values aren't set by user, sets them to 0 once you save
function setZeroValues(stat_code) {
  if (getBaseValue(stat_code) == "") {
    getBase(stat_code).value = ZERO;
  }
  if (getModValue(stat_code) == "") {
    getMod(stat_code).value = ZERO;
  }
};

// Sets the total value of a stat
function setValue(stat_code) {
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
};

// Sets the character name
function setName() {
  if (getName().value == "") {
    getName().value = character.name;
  }
  character.name = getName().value;
};

// function buildJSON(name, stats)

function showToast() {
  var toast = document.getElementById("toast")
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
};

function clickSave() {
 character.str = setValue("str");
 character.dex = setValue("dex");
 character.int = setValue("int");
 setName();
 charJSON = character.buildJSON();
 showToast();
};
