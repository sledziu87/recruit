import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Output from './output/Output';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('includes Output', () =>{
  const app = shallow(<App/>);
  expect(app.containsMatchingElement(<Output/>)).toEqual(true)
});

