import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from '/imports/modules/get-input-value';


let component;

const getUserData = () => ({
    email: getInputValue(component.refs.emailAddress),
    password: getInputValue(component.refs.password),
    profile: {
        name: {
            first: getInputValue(component.refs.firstName),
            last: getInputValue(component.refs.lastName),
        }
    }
});

const signup = () => {
    const user = getUserData();

    Accounts.createUser(user, (error) =>{
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            browserHistory.push('/');
            Bert.alert('Welcome!', 'success');
        }
    });
}

const validate = () => {
    $(component.refs.signup).validate({
        rules: {
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 4
            }
        },
        messages: {
            firstName: {
                required: 'กรอกชื่อหน่อยสิ๊'
            },
            lastName: {
                required: 'นามสกุลด้วยยยย'
            },
            emailAddress: {
                required: 'ต้องการอีเมล์ม๊ากมาก',
                email: 'ให้มีมาตรฐานสักนิ๊ดหนึ่ง ตย. admin@meteortricks.com'
            },
            password: {
                required: 'อันนี้ก็สำคัญนะ บอกเลย',
                minlength: 'อย่างน้อยต้อง 4 ตัวนะตะเอง'
            }
        },
        submitHandler() {
            signup();
        }
    });
}


export const handleSignup = (options) => {
    component = options.component;
    validate();
}