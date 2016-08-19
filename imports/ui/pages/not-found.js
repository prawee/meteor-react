
import React from 'react';
import { Alert } from 'react-bootstrap';
export const NotFound = React.createClass({
    render: function() {
        return (
            <Alert bsStyle="danger">
                <p><strong>โอ้ยเนาะ เจ๊าเข้าผิดแล้ว [404]</strong>: { window.location.pathname }  หน้านี้บ่มีเด้อจ้า</p>
            </Alert>
        );
    }
});