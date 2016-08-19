import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from '/imports/modules/get-input-value';

let component;
let token;

const handleReset = () => {
    const password = getInputValue(component.refs.newPassword);
    
    Accounts.resetPassword(token, password, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            browserHistory.push('/');
            Bert.alert('Password reset!', 'success');
        }
    });
}

const validate = () => {
    $(component.refs.resetPassword).validate({
        rules: {
            newPassword: {
                required: true,
                minlength: 4
            },
            repeatNewPassword: {
                required: true,
                minlength: 4,
                equalTo: '[name="newPassword"]'
            }
        },
        messages: {
            newPassword: {
                required: 'รหัสใหม่จ้าาา',
                minlength: 'อย่างน้อย 4 ตัวนะจ๊ะ'
            },
            repeatNewPassword: {
                required: 'ยืนยันรหัสใหม่อีกเทื่อ',
                minlength: 'อย่างน้อย 4 ตัวเช่นกันจ๊ะ',
                equalTo: 'อืมม, พิมพ์ให้เหมือนกับช่องบนหน่อยสิ๊'
            }
        },
        submitHandler() {
            handleReset();
        }
    });
}

export const handleResetPassword = (options) => {
    component = options.component;
    token = options.token;
    validate();
}