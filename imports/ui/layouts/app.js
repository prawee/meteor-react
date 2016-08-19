import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '/imports/ui/containers/app-navigation';

export const App = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired,
  },
  render() {
    return (
        <div>
            <AppNavigation />
            <Grid>
                { this.props.children }
            </Grid>
        </div>
    );
  },
});
