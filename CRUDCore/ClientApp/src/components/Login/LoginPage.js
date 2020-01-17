import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { login } from '../../action/authAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginPage extends Component {
    render() {
        const { login }=this.props;
        return (
            <Row>
                <Col md={4} mdoffset={3}>
                    <LoginForm login={login}/>
                </Col>
            </Row>
        );
    }
}
LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}
export default connect(null, {login})(LoginPage);