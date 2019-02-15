import App from './App';
import Title from './Title';
import Avatar from './Avatar';
import StatsForm from './StatsForm';

describe('App Component', function() {
  // *******************
  // Default React tests
  // *******************
  // it('renders without crashing', () => {
  //   // creates a div and renders the Component into the div then unmounts it
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  const wrapper = shallow(<App />);
  // ***********************
  // Enzyme/Chai/Sinon tests
  // ***********************
  // Shallow constrains tests to the component and don't indirectly assert child components
  it('renders', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('renders Title component', () => {
    expect(wrapper.find(Title)).to.have.lengthOf(1);
  });

  it('renders Avatar component', () => {
    expect(wrapper.find(Avatar)).to.have.lengthOf(1);
  });

  it('renders StatsForm component', () => {
    expect(wrapper.find(StatsForm)).to.have.lengthOf(1);
  });

  //using sinon
  // Stubs: https://sinonjs.org/releases/v4.1.2/stubs/
  //   var stub = sinon.stub(obj);
  // Stubs all the object’s methods.

  // var stub = sinon.stub(object, "method");
  // Replaces object.method with a stub function. An exception is thrown if the property is not already a function.
  // If you want to create a stub object of MyConstructor, but don’t want the constructor to be invoked, use this utility function.
  //
  // var stub = sinon.createStubInstance(MyConstructor)



  // it('', () => {
  //
  // });
});
