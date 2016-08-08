import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import UserActive from '../../js/components/UserActive';


describe('<UserActive />', () => {
    it('Component should exist', () => {
        const wrapper = shallow(<UserActive />);
        expect(wrapper).to.exist;
    });

    it('Should return a div with `user not found` text', () => {
        const wrapper = shallow(<UserActive />);

        expect(wrapper.type()).to.equal('div');
        expect(wrapper.text()).to.equal('User not found.');
    });

    it('Should return a correct overall html, when passed a right props', () => {
        const user = {
            image: 'owl',
            name: 'Andrey Khamedov',
            age: 30,
            phone: '+79271330300',
            phrase: 'there is no another day for a living'
        };
        const wrapper = shallow(<UserActive user={user}/>);

        expect(wrapper.type()).to.equal('div');
        expect(wrapper.hasClass('list-group')).to.equal(true);
        expect(wrapper.find('.list-group-item.row').length).to.equal(5);
    });

    it('Should return a correct image html, when passed a right props', () => {
        const user = {
            name: 'Andrey Khamedov',
            image: 'owl',
            age: 30,
            phone: '+79271330300',
            phrase: 'there is no another day for a living'
        };
        const wrapper = shallow(<UserActive user={user}/>);
        const props = wrapper.childAt(0).childAt(0).props();

        expect(props.src).to.equal('/images/' + user.image + '.svg');
        expect(props.alt).to.equal(user.name);
    });

    it('Should return a correct info html, when passed a right props', () => {
        const user = {
            name: 'Andrey Khamedov',
            age: '30',
            phone: '+79271330300',
            phrase: 'there is no another day for a living'
        };
        const userKeysArr = Object.keys(user);
        const wrapper = shallow(<UserActive user={user}/>);
        wrapper.find('.row .col-md-8').forEach((node, idx) => {
            expect(node.text()).to.equal(user[userKeysArr[idx]]);
        });
    });
});