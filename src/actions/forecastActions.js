import $ from 'jquery';
import {
  dispatch
} from 'react-redux';

export function selectForecast(location) {
	return {
		type: "SELECT_FORECAST",
		location
	};
}

export function requestForecast(location) {
  return {
    type: "REQUEST_FORECAST",
    location
  };
}

export function receiveForecast(location, json) {
  return {
    type: "RECEIVE_FORECAST",
    location,
    forecast: json
  };
}

export function fetchForecast(location) {

  return function(dispatch) {

    dispatch(requestForecast(location));

    return $.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&mode=json&units=metric&appid=6c7b45d551148b3840514e77e3d0225c`)
      .then(function(data) {
        dispatch(receiveForecast(location, data));
      });

  };
}
