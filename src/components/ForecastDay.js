import React, {PropTypes} from 'react';

const DAYS_OF_WEEK = ["SUN","MON","TUE","WED","THURS","FRI","SAT"];

const getPrettyDayOfWeek = function(forecast) {
  const date = new Date(forecast["dt"] * 1000);
  return DAYS_OF_WEEK[date.getDay()];
};

const calculateTemp = function(items) {
  return items
    .map(i => i.temp)
    .reduce(function(memo, cur){
      if(cur) {
        return memo + cur;
      }
    return memo;
  }) / items.length;
};

const calculateWind = function(windItems) {
  return windItems
    .map(w => w.speed)
    .reduce(function(memo, cur){
      if(cur) {
        return memo + cur;
      }
    return memo;
  });
};

const calculateRain = function(rainItems) {
  return rainItems
    .map(r => (r["3h"] || 0))
    .reduce(function(memo, cur){
      if(cur) {
        return memo + cur;
      }
    return memo;
  });
};

export default class ForecastDay extends React.Component {

  render() {

    const temp = calculateTemp(this.props.forecast.map(f => f.main));
    const rain = calculateRain(this.props.forecast.map(f => f.rain || { "3h": 0}));
    const wind = calculateWind(this.props.forecast.map(f => f.wind));
    const dayOfWeek = getPrettyDayOfWeek(this.props.forecast[0]);

    return (
      <div className="col-md-2">
        <div className="forecast-day">
          <header className="day-header clearfix">
            <h2>{dayOfWeek}</h2>
            <img src="http://openweathermap.org/img/w/10d.png"/>
          </header>

          <dl className="dl-horizontal">
            <dt>Rain</dt>
            <dd>{rain.toFixed(2)}mm</dd>
            <dt>Wind</dt>
            <dd>{wind.toFixed(2)} m/s</dd>
            <dt>Temp</dt>
            <dd>{temp.toFixed(2)}C</dd>
          </dl>
        </div>
      </div>
    );
  }
}

ForecastDay.propTypes = {
  forecast: PropTypes.object.isRequired
};
