import React, { Component } from 'react'
import Input from '../Input/Input';

export class RegisterForm extends Component {
    state = {
        formData: {
            name: {
                value: "",
                validator: {
                    minLength: 3,
                    maxLength: 6,
                    required: true
                },
                error: { status: true, message: "", isTouched: false }
            },
            phoneNumber: {
                value: "",
                validator: {
                    minLength: 10,
                    maxLength: 10
                },
                error: { status: true, message: "", isTouched: false }
            },
            email: {
                value: "",
                validator: {
                    required: true
                },
                error: { status: true, message: "", isTouched: false }
            },
            password: {
                value: "",
                validator: {
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: { status: true, message: "", isTouched: false }
            }
        },
        isFormValid: false
    }

    checkValue = (value, rules) => {
        let isValid = true;
        let message = "";
        let trimValue = value.trim();

        if (rules.maxLength && trimValue.length > rules.maxLength) {
            isValid = false;
            message = `ช่องนี้มีความยาวต้องไม่เกิน ${rules.maxLength} ตัว`
        }

        if (rules.minLength && trimValue.length < rules.minLength) {
            isValid = false;
            message = `ช่องนี้มีความยาวอย่างน้อย ${rules.minLength} ตัว`
        }

        if (rules.required && trimValue.length === 0) {
            isValid = false;
            message = "คุณต้องกรอกช่องนี้";
        }

        return { isValid, message };
    }

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updatedForm = { ...this.state.formData };
        updatedForm[fieldName].value = fieldValue;

        let { isValid, message } = this.checkValue(e.target.value, updatedForm[fieldName].validator)

        updatedForm[fieldName].error.status = !isValid;
        updatedForm[fieldName].error.message = message;
        updatedForm[fieldName].error.isTouched = true;

        let newIsFormValid = true;
        for (let fn in updatedForm) {
            if (updatedForm[fn].validator.required === true) {
                newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;
            }
        }

        this.setState({
            formData: updatedForm,
            isFormValid: newIsFormValid
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { name, phoneNumber, email, password } = this.state.formData;
        const { isFormValid } = this.state

        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={name.value}
                        name="name"
                        placeholder="ชื่อ"
                        error={name.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={phoneNumber.value}
                        name="phoneNumber"
                        placeholder="เบอร์โทรศัพท์"
                        error={phoneNumber.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={email.value}
                        name="email"
                        placeholder="อีเมล์"
                        error={email.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={password.value}
                        name="password"
                        placeholder="รหัสผ่าน"
                        error={password.error}
                    />
                    {/* <input onChange={this.onChangeInput} value={name.value} className="Input InputElement" name="name" placeholder="ชื่อ"></input>
                    <input onChange={this.onChangeInput} value={phoneNumber.value} className="Input InputElement" name="phoneNumber" placeholder="เบอร์โทรศัพท์"></input>
                    <input onChange={this.onChangeInput} value={email.value} className="Input InputElement" name="email" placeholder="อีเมล์"></input>
                    <input onChange={this.onChangeInput} value={password.value} className="Input InputElement" name="password" placeholder="รหัสผ่าน" type="password"></input> */}
                    <button disabled={!isFormValid} htmlFor="submit" className="Button">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm