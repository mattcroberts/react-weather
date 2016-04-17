import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ForecastPage } from './ForecastPage';
import Forecast from '../components/Forecast';

describe('<ForecastPage />', () => {
  it('should contain <Forecast />', () => {

    const actions = {
      lookupForecast: () => {}
    };
    const appState = {};
    const wrapper = shallow(<ForecastPage actions={actions} appState={appState}/>);

    expect(wrapper.find(Forecast)).to.be.length(1);
  });
});
