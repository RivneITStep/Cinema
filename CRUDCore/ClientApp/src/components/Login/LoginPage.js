import React, { Component } from 'react';

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
                            <button type="button" class="btnSubmit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;