import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SortButton from '../../js/components/SortButton';


describe('<SortButton/>', () => {
    it('Should exist', () => {
        const wrapper = shallow(<SortButton />);

        expect(wrapper).to.exist;
    });

    it('Should return correct html', () => {
        const sorter = {
            active: 'active',
            direction: 'desc',
            icon: 'alpha',
            name: 'age'
        };
        const wrapper = shallow(<SortButton sorter={sorter} />);

        expect(wrapper.hasClass('row')).to.equal(true);
        expect(wrapper.find('a.btn.btn-default.active')).to.have.length(1);
        expect(wrapper.find('a.btn.btn-default.active').props()['data-name']).to.equal(sorter.name);
        expect(wrapper.find(`i.fa.fa-sort-${sorter.icon}-${sorter.direction}`)).to.have.length(1);
        expect(wrapper.find('a span').text()).to.equal(`Sort by ${sorter.name}`);
    });
});
