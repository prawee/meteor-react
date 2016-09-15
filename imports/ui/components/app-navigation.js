import React, { Component, PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';


export class AppNavigation extends Component{
    renderNavigation(hasUser){
        return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
    }
    render() {
        return (
            <Navbar className="navbar-static-top bs-docs-nav">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">MeteorTricks</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    { this.renderNavigation(this.props.hasUser) }
                </Navbar.Collapse>
            </Navbar>   
        );
    }
};

AppNavigation.propTypes = {
    hasUser: PropTypes.object,
};
