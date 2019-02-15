import Avatar from './Avatar';
import Image from 'react-bootstrap/Image'

describe('Avatar Component', function() {
  const wrapper = shallow(<Avatar />);

  it('renders', () => {
    assert.exists(wrapper, 'Avatar is neither `null` nor `undefined`');
  });

  it ('renders one div', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });

  it('has alt text', () => {
    const image = wrapper.find('img');
    const alt = image.find({'alt': 'Character'});
    assert.exists(alt, 'alt text exists');
  });
});
