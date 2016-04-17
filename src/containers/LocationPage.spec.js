import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LocationPage } from './LocationPage';
import LocationForm from '../components/LocationForm';

describe('<LocationPage />', () => {
  it('should contain <LocationForm />', () => {

    const actions = {};
    const appState = {};
    const wrapper = shallow(<LocationPage actions={actions} appState={appState}/>);

    expect(wrapper.find(LocationForm)).to.be.length(1);
  });
});
