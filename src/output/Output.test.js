import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';

it('renders without crashing', () => {
    shallow(<Output />);
});