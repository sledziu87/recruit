import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';
import InputComp from'../input/InputComponent';

// it('cos',() => {
//     const output = shallow (<Output/>);
//
//     output.find()
//     expect(output.find('InputComp').prop('typeNipOrigin')).toEqual()
// })

it('renders without crashing', () => {
    shallow(<Output />);
});


// it('cos',() => {
//     const inputComp = shallow (<InputComp/>);
//     const output = shallow (<Output/>);
//     output.find('InputComp').prop('typeNipOrigin');
//
//     // expect(output.find('InputComp').prop('typeNipOrigin')
//     //     .simulate('input',{currentTarget: {value t}});
//     // expect(inputComp.find())
// });
//
// it('symulacja', () => {
//     const inputComp = shallow (<InputComp/>);
//     const output = shallow (<Output/>);
//     inputComp.find('input').simulate('input',{currentTarget:{value:"5261009959"}});
//     expect(output.find('InputComp').prop('typeNipOrigin')).toEqual([this.state = nip: 5261009959)
// });

// moze z show Info - true / false
//
// it('sth', () =>{
//     const inputComp = shallow (<InputComp/>);
//     expect(inputComp.find('input')).to.have.length(0);
//     const output= shallow (<Output/>);
//     expect(output.find
//     output.setState({})
//     //
//     // .prop('onChange').toEqual)
//     // inputComp.simulate('input',{
//     //
//     // output.setState({})
// })