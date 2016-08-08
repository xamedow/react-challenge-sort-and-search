import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import UserData from '../../js/components/UserData';


describe('<UserData />', () => {
    const user = {
        image: 'owl',
        name: 'Andrey Khamedov',
        age: '30',
        phone: '+79271330300',
        phrase: 'there is no another day for a living'
    };

    it('Component should exist', () => {
        const setCurrent = sinon.spy();
        const wrapper = shallow(<UserData user={user} setCurrent={setCurrent} />);

        expect(wrapper).to.exist;
    });

    it('Should have an active class when passed isCurrent: true prop', () => {
        const setCurrent = sinon.spy();
        const wrapper = shallow(<UserData user={user} isCurrent={true} setCurrent={setCurrent} />);

        expect(wrapper.hasClass('active')).to.equal(true);
    });

    it('Shouldn`t have an active class when passed isCurrent: false prop', () => {
        const setCurrent = sinon.spy();
        const wrapper = shallow(<UserData user={user} isCurrent={false} setCurrent={setCurrent} />);

        expect(wrapper.hasClass('active')).to.equal(false);
    });

    it('Should map user object to its html', () => {
        const setCurrent = sinon.spy();
        const wrapper = shallow(<UserData user={user} isCurrent={false} setCurrent={setCurrent} />);
        const userKeysArr = Object.keys(user);

        wrapper.find('td').forEach((td, idx) => {
            if(td.hasClass('img')) {
                expect(td.find('img').props().src).to.equal(`/images/${user.image}.svg`);
                expect(td.find('img').props().alt).to.equal(user.name);
            } else {
                expect(td.text()).to.equal(user[userKeysArr[idx]]);
            }
        });
    });
});