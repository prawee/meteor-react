import $ from 'jquery';
import 'jquery-validation';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from '/imports/modules/get-input-value';


let component;

const handleRecover = () => {
    Accounts.forgotPassword({
        email: getInputValue(component.refs.emailAddress)
    }, (error) => {
        if (error) {
            Bert.alert(error.reason, 'warning');
        } else {
            Bert.alert('Check your inbox for reset link!', 'success');
        }
    });
}

const validate = () => {
    $(component.refs.recoverPassword).validate({
        rules: {
            emailAddress: {
                required: true,
                email: true
            }
        },
        messages: {
            emailAddress: {
                required: 'ต้องการอีเมล์ม๊ากมาก',
                email: 'แน๊ะ ให้มันเป็นมาตรฐานหน่อยสิ๊ ตย. admin@meteortricks.com'
            }
        },
        submitHandler() {
            handleRecover();
        }
    });
}
export const handleRecoverPassword = (options) => {
    component = options.component;
    validate();
}