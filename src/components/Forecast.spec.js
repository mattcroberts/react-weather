import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Forecast from '../components/Forecast';
import ForecastDay from '../components/ForecastDay';

describe('<Forecast />', () => {
  it("Should contain ForecastDay components", () => {

    const appState = {
      currentForecast: "test",
    	forecastByLocation: {
        test: {
          name: "Test Land",
          data: [{},{}]
        }
      }
    };

    const wrapper = shallow(<Forecast appState={appState}/>);

    const dayComponents = wrapper.find(ForecastDay);

    expect(dayComponents.length).to.equal(2);
  });

  it("Should display the pretty name", () => {

    const appState = {
      currentForecast: "test",
      forecastByLocation: {
        test: {
          name: "Test Land",
          data: [{},{}]
        }
      }
    };

    const wrapper = shallow(<Forecast appState={appState}/>);

    const heading = wrapper.find(".forecast-heading__pretty-name");

    expect(heading.text()).to.equal("Test Land");
  });
});
