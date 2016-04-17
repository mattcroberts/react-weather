import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import ForecastDay from './ForecastDay';

const createForecasts = function(forecasts) {
  const forecastComponents = [];
  const keys = Object.keys(forecasts);
  for(let i = 0; i < keys.length; i++) {
    const forecast = forecasts[keys[i]];
    forecastComponents.push(<ForecastDay forecast={forecast}/>);
  }

  return forecastComponents;
};

const Forecast = ({appState}) => {

  const current = appState["forecastByLocation"][appState.currentForecast]? appState["forecastByLocation"][appState.currentForecast] : {};
  const forecasts = createForecasts(current.data);

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h1>Weather Forecast For <em className="forecast-heading__pretty-name">{current.name}</em></h1>
      </div>
      <div className="row">
        <div className=" center-block forecast clearfix">
          {forecasts}
        </div>
      </div>
      <div className="row">
        <Link to="/" className="btn center-block" role="button">Check another location</Link>
      </div>
    </div>
  );
};

Forecast.propTypes = {
  appState: PropTypes.object.isRequired
};

export default Forecast;
