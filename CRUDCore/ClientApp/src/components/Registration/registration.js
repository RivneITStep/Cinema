import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from "react-redux";
import { register } from "../../action/authAction";
import history from '../../history';
import './registration.css';
class SignUpForm extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        confPassword: '',
        errors: {

        },
        done: false,
        isLoading: false
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                }
            )
        }
        else {
            this.setState(
                { [name]: value })
        }
    }

    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }


    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.email === '') errors.email = "Это поле должно содержать E-Mail в формате example@site.com."
        if (this.state.name === '') errors.name = "Поле не може бути пустим."
        if (this.state.password === '') errors.password = "Поле не може бути пустим."
        if (this.state.confPassword === '') errors.confPassword = "Поле не може бути пустим."
        if (this.state.password !== this.state.confPassword) errors.confPassword = "Поле не може бути пустим.Пароль має містити А-Я,а-я,0-9,та символи, пароль не може містити менш ніж 8 символів"

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { password, name, email } = this.state;
            this.setState({ isLoading: true });
            this.props.register({ Name: name, Password: password, Email: email })
                .then(
                    () => () => history.push('/home'),//Redirect to home
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }
    }

    render() {

        const { errors, isLoading } = this.state;
        const form = (
            <form onSubmit={this.onSubmitForm} className="form" id="form-content">

                {
                    !!errors.invalid ?
                        <div className="alert alert-danger">
                            <strong>Danger!</strong> {errors.invalid}.
                </div> : ''}


                <div id="row1" className={classnames('form__field', { 'has-error': !!errors.email })}>
                    <input type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange} />

                </div>


                <div id="row" className={classnames('form__field', { 'has-error': !!errors.name })}>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />

                </div>


                <div id="row" className={classnames('form__field', { 'has-error': !!errors.password })}>
                    <input type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.password}
                        required
                        placeholder="Password"
                        onChange={this.handleChange} />

                </div>


                <div id="row" className={classnames('form__field', { 'has-error': !!errors.confPassword })}>
                    <input type="password"
                        className="form-control"
                        id="confPassword"
                        name="confPassword"
                        value={this.state.confPassword}
                        required
                        placeholder="confPassword"
                        onChange={this.handleChange} />
                </div>



                <div className="form-group">
                    <div className="col-md-12" >
                        <button type="submit" className="btnSubmit"
                            disabled={isLoading}>Sign Up <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>

            </form>
        );
        return (
                form
        );
    }
}


SignUpForm.propTypes = {
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(SignUpForm);