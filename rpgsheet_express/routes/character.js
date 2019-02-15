var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    	name: "Hacker McHackerson",
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
      ],
      skills: ["hacking"]
    }
  );
});

module.exports = router;
