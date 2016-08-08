import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SearchBar from '../../js/components/SearchBar';


describe('<SearchBar/>', () => {
    it('Should exist', () => {
        const wrapper = shallow(<SearchBar />);

        expect(wrapper).to.exist;
    });

    it('Should count users', () => {
        const wrapper = shallow(<SearchBar />);

        expect(wrapper.find('.badge').text()).to.equal('0');

        wrapper.setProps({foundUsers: 5});

        expect(wrapper.find('.badge').text()).to.equal('5');
    });

    it('Should have appropriate html', () => {
        const wrapper = shallow(<SearchBar />);

        expect(wrapper.hasClass('container-fluid')).to.equal(true);
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('.badge')).to.have.length(1);
    });

    it('Should change term value when its prop changed', () => {
        const setTerm = sinon.spy();
        const term = 'My search term';
        const wrapper = shallow(<SearchBar setTerm={setTerm} />);
        const input = wrapper.find('input');

        expect(input.props().value).to.equal('');
        expect(setTerm.calledOnce).to.equal(false);

        wrapper.setProps({term});

        expect(wrapper.find('input').props().value).to.equal(term);
    });
});