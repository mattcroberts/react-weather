import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/forecastActions';
import Forecast from '../components/Forecast';

export class ForecastPage extends React.Component {
  render(){
    return (
      <Forecast
        appState={this.props.appState}
        lookupForecast={this.props.actions.lookupForecast}
      />
    );
  }
}

ForecastPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.appState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastPage);
