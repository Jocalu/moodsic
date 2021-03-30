/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import Loading from '../loading/loading';

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component,
      { onRedirecting: () => <Loading /> })}
    {...args}
  />
);
export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired
};
