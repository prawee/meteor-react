import React from 'react';
import { render } from 'react-dom';
import { 
    Router, 
    Route, 
    IndexRoute, 
    browserHistory
} from 'react-router';
import { App } from '/imports/ui/layouts/app';
import { Meteor } from 'meteor/meteor';
import { Index } from '/imports/ui/pages/index';
import { Blog } from '/imports/ui/pages/blog';
import { Login } from '/imports/ui/pages/login';
import { Signup } from '/imports/ui/pages/signup';
import { NotFound } from '/imports/ui/pages/not-found';
import { RecoverPassword } from '/imports/ui/pages/recover-password';
import { ResetPassword } from '/imports/ui/pages/reset-password';

const requireAuth = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
};

/**
 * start
 */
Meteor.startup(function() {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute name="index" component={ Index } />
                <Route name="blog" path="/blog" component={ Blog } onEnter={ requireAuth } />
                <Route name="singup" path="/signup" component={ Signup } />
                <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
                <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
                <Route name="login" path="/login" component={ Login } />
                <Route path="*" component={ NotFound } />
            </Route>
        </Router>,
        document.getElementById('react-root')
    );
});