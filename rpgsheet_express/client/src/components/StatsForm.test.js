import App from './App';
import StatsForm from './StatsForm';

describe('StatsForm component testing', function() {
  const wrapper = shallow(<StatsForm />);

  const jsonOK = body => {
    const mockResponse = new Response(JSON.stringify(body), {
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
      })
      return Promise.resolve(mockResponse)
  }

  // it renders
  it('renders', () => {
    expect(wrapper.exists()).to.equal(true);
  });

// it calls componentDidMount
// it('calls componentDidMount', () => {
//   sinon.spy(StatsForm, 'componentDidMount');
//   expect(StatsForm.componentDidMount.calledOnce).to.equal(true);
// });

// it fetches default character
  it('fetches default character', () => {
    sinon.stub(window, 'fetch').returns(jsonOK({stuff: [1,2,3]}));
  });
});

// it('', () => {
//
// });
