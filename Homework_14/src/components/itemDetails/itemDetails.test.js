import React from 'react';
import ItemDetails from './itemDetails';
import {shallow} from 'enzyme';
// import gotService from '../../service/gotService';

describe('Testing <ItemDetails/>', () => {
    // const service = new gotService();
    const item = shallow(<ItemDetails/>);

    it('ItemDetails have rendered correctly', () => {
        const header = shallow(<ItemDetails/>);
        expect(header).toMatchSnapshot();
    })

    describe('Testing snap and state', () => {
    
        // it('ItemDetails have rendered correctly', () => {
        //     expect(char).toMatchSnapshot();
        // })
        
        // it('ItemDetails state "char" is empty object', () => {
        //     expect(char.state().char).toBeObject();
        // });
    
        it('ItemDetails state "item" is empty true', () => {
            expect(item.state().item).toBeFalsy();
        });
    
        // it('ItemDetails state "item" is empty true', () => {
        //     expect(char.state().item).toBeFalsy();
        // });
    });
})