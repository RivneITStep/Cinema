﻿import React, { Suspense, Component } from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { login } from "../../action/authAction";
import history from '../../history';
import $ from "jquery";
import "./login.css";
class LoginPage extends Component {
    state = {
        name: '',
        email:'',
        password: '',
        errors: {
            password: "Вкажи пароль"
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
        if (this.state.name === '') errors.name = "Поле є обов'язковим!"
        if (this.state.email === '') errors.email = "Поле є обов'язковим!"
        if (this.state.password === '') errors.password = "Поле є обов'язковим!"
        console.log(this.props);
        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { password,name,email } = this.state;
            this.setState({ isLoading: true });
            this.props.login({Name:name, Password: password,Email:email })
                .then(
                    () => history.push('/home'),//Redirect to home
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }


    }
    render() {
       
        const { errors, isLoading } = this.state;
        if (isLoading){
            
            setTimeout(function() {
                $('.inner div').addClass('done'); 
                
                setTimeout(function() {
                  $('.inner div').addClass('page'); 
                  
                  setTimeout(function() {
                    $('.pageLoad').addClass('off'); 
                    
                    $('body, html').addClass('on'); 
                    
                    
                  }, 500)
                }, 500)
              }, 1500)
        }
        console.log(this.props.history);
        const form = (
            <form onSubmit={this.onSubmitForm} id="form-content">

            {
                !!errors.invalid ?
                    <div className="alert alert-danger">
                        <strong>Danger!</strong> {errors.invalid}.
                </div> : ''}


            <div id="row1" className={classnames('form-group', { 'has-error': !!errors.name })}>
                <input type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
            </div>


            <div id="row" className={classnames('form-group', { 'has-error': !!errors.email })}>
                <input type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
            </div>



            <div id="row" className={classnames('form-group', { 'has-error': !!errors.password })}>
                <input type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleChange} />
                {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
            </div>


            <div className="form-group">
                <div className="col-md-12" >
                    <button type="submit" className="btnSubmit"
                        disabled={isLoading}>Sign In <span className="glyphicon glyphicon-send"></span></button>
                </div>
            </div>
        </form>
        );
        return (
            <Suspense fallback={<div className="pageLoad">
      <div className="inner">
        <div></div>
        <div></div> 
        <div></div>
        <div></div>
      </div> </div>}>
            {form}
        </Suspense>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);