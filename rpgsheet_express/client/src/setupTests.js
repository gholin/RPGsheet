import React from "react";
import ReactDOM from 'react-dom';

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import { expect, assert, should } from 'chai';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
global.expect = expect;
global.assert = assert;
global.should = should;
global.ReactDom = ReactDOM;
