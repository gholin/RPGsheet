start express server (in root):
PORT=3001 node bin/www

start react app (in client):
npm start

Express:
---------
Once you create a route in the routes/ folder, you need to go to app.js and
add a Router like so:
var characterRouter = require('./routes/character');

and then call app.use on it like so:
app.use('/character', charactersRouter);


React:
-------
When using JSX you can only return a single element.
All elements must be wrapped so that you are returning a single div including all of them
That's why the error says you need to wrap adjacent jsx in tags
if you have say (h1, form and div) that are adjacent to each other like so:

return(
  <h1></h1>
  <form></form>
  <div></div>
);

You would instead go:
return(
  <div>
    <h1></h1>
    <form></form>
    <div></div>
  </div>
);


Questions
1. I have a character I create in my constructor and pull a default character from the backend and set the character's state to have those details.
2. How do I set what's in a field (Make something 0)?
3. How do I pass things from the field to my character
4. How do you access elements from child react components?


Passing props down to child
sets textProp in the child to RPG Sheet
<div><Title textProp="RPG Sheet" /></div>
In child:
// props parameter takes what you pass in
constructor(props) {
    super(props)
}

<h1 id='title-bar'>{this.props.textProp}</h1>

There is only one reason when one needs to pass props to super(), and
that's when you want to access this.props in constructor.
