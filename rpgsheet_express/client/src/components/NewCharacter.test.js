import NewCharacter from './NewCharacter';


describe('Avatar Component', function() {
  const wrapper = shallow(<NewCharacter />);

  it('renders', () => {
    assert.exists(wrapper, 'NewCharacter is not null or undefined!');
  });

  // it('', () => {
  //
  // });
});
