import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = React.createClass({
    render: function(){
        return (
            <Jumbotron className="text-center">
                <h2>Meteor Tricks</h2>
                <p>Power by Meteor and React</p>
                <p><a className="btn btn-success" href="/blog">Start</a></p>
                <p style={ { fontSize: '16px', color: '#aa'} }>Current at v1.0</p>
                <p style={ { fontSize: '12px', color: 'orange'} }>Program by Prawee Wongsa</p>
            </Jumbotron>
        );
    }
});
