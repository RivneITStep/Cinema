import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from "react-redux";
import { register } from "../../action/authAction";
import history from '../../history';
import ReCAPTCHA from "react-google-recaptcha";
import './registration.css';
class SignUpForm extends Component {
    constructor() {
        super();
        this.handleExpired = this.handleExpired.bind(this);
        this.handleErrored = this.handleErrored.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRecaptchaRef = this.handleRecaptchaRef.bind(this);
      }
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

//////////////react-google-recaptcha//////////////////
getValue() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this._widgetId);
    }
    return null;
  }

  getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }
    return null;
  }

  execute() {
    const { grecaptcha } = this.props;

    if (grecaptcha && this._widgetId !== undefined) {
      return grecaptcha.execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  }

  reset() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      this.props.grecaptcha.reset(this._widgetId);
    }
  }

  handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  }

  handleErrored() {
    if (this.props.onErrored) this.props.onErrored();
  }

  handleChange(token) {
    if (this.props.onChange) this.props.onChange(token);
  }

  explicitRender() {
    if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === undefined) {
      const wrapper = document.createElement("div");
      this._widgetId = this.props.grecaptcha.render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge,
      });
      this.captcha.appendChild(wrapper);
    }
    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  }

  componentDidMount() {
    this.explicitRender();
  }

  componentDidUpdate() {
    this.explicitRender();
  }

  componentWillUnmount() {
    if (this._widgetId !== undefined) {
      this.delayOfCaptchaIframeRemoving();
      this.reset();
    }
  }

  delayOfCaptchaIframeRemoving() {
    const temporaryNode = document.createElement("div");
    document.body.appendChild(temporaryNode);
    temporaryNode.style.display = "none";

    // move of the recaptcha to a temporary node
    while (this.captcha.firstChild) {
      temporaryNode.appendChild(this.captcha.firstChild);
    }

    // delete the temporary node after reset will be done
    setTimeout(() => {
      document.body.removeChild(temporaryNode);
    }, 5000);
  }

  handleRecaptchaRef(elem) {
    this.captcha = elem;
  }
///======================================================
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
        // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
        /* eslint-disable no-unused-vars */
        const {
          sitekey,
          onChange,
          theme,
          type,
          tabindex,
          onExpired,
          onErrored,
          size,
          stoken,
          grecaptcha,
          badge,
          hl,
          ...childProps
        } = this.props;
        /* eslint-enable no-unused-vars */
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
                <div {...childProps} ref={this.handleRecaptchaRef} />
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
ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  grecaptcha: PropTypes.object,
  theme: PropTypes.oneOf(["dark", "light"]),
  type: PropTypes.oneOf(["image", "audio"]),
  tabindex: PropTypes.number,
  onExpired: PropTypes.func,
  onErrored: PropTypes.func,
  size: PropTypes.oneOf(["compact", "normal", "invisible"]),
  stoken: PropTypes.string,
  hl: PropTypes.string,
  badge: PropTypes.oneOf(["bottomright", "bottomleft", "inline"]),
};
ReCAPTCHA.defaultProps = {
  onChange: () => {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright",
};

SignUpForm.propTypes = {
    register: PropTypes.func.isRequired
}


export default connect(null, { register })(SignUpForm);
