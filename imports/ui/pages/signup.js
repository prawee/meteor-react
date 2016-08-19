import React, { Component } from 'react';
import { Link } from 'react-router';
import {
    Row, Col, FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import { handleSignup } from '/imports/modules/signup';

export class Signup extends Component {
    componentDidMount() {
      handleSignup({ component: this });
    }
    handleSubmit(event) {
      event.preventDefault();
    }
    render() {
        return (
            <Row>
                <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <h4 className="page-header">Sign Up</h4>
                    <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
                        <Row>
                            <Col xs={ 6 } sm={ 6 }>
                                <FormGroup>
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl type="text" ref="firstName" name="firstName" placeholder="First Name">
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={ 6 } sm={ 6 }>
                                <FormGroup>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl type="text" ref="lastName" name="lastName" placeholder="Last Name">
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl type="text" ref="emailAddress" name="emailAddress" placeholder="Email Address">
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" ref="password" name="password" placeholder="Password">
                            </FormControl>
                        </FormGroup>
                        <Button type="submit" bsStyle="success">Sign Up</Button>
                    </form>
                    <p>
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </Col>
            </Row>
        );
    }
}