import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <div classNames="container register-form">
                <div classNames="form">
                    <div id="form-content">
                        <div class="row">
                            <div classNames="col-md-6">
                                <div classNames="form-group">
                                    <input type="text" classNames="form-control" placeholder="Nikname *" value="" />
                                </div>
                                <br />
                                <div classNames="form-group">
                                    <input type="text" classNames="form-control" placeholder="Password *" value="" />
                                </div>
                                <br />
                            </div>
                            <button type="submit" class="btnSubmit"> <Link className="text-light link" to="/">Submit</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;