import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';

const onSubmit = function(e) {
  e.preventDefault();
  const location = e.target.elements[0].value;

  this.props.fetchForecast(location)
    .then(() => this.props.selectForecast(location))
    .then(() => this.props.history.push("/forecast/" + location));
};

export default class LocationForm extends React.Component {
  render() {
    return (
    <div className="container-fluid text-center">
        <div className="col-md-4 col-md-offset-4">
          <div className="row">
            <h1>Weather Forecast</h1>
          </div>
          <div className="row">
            <form className="form-inline" onSubmit={onSubmit.bind(this)}>
              <div className="input-group">
                <input required className="form-control" placeholder="Location" name="location"/>
                <span className="input-group-btn">
                  <button className="btn" type="submit">Go</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LocationForm.propTypes = {
  appState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchForecast: PropTypes.func.isRequired,
  selectForecast: PropTypes.func.isRequired
};
