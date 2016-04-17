import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/forecastActions';
import LocationForm from '../components/LocationForm';

export class LocationPage extends Component {
  render() {
    return (
      <LocationForm
        appState={this.props.appState}
        selectForecast={this.props.actions.selectForecast}
        fetchForecast={this.props.actions.fetchForecast}
        history={this.props.history}
      />
    );
  }
}

LocationPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
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
)(LocationPage);
