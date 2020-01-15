import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import './registration.css'

class registration extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
        };
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        const model = {
            name: this.state.name,
            Password: this.state.Password
        };

        axios.post('https://localhost:44321/api/user', model)
            .then(
                (resp) => {
                    console.log('--success post--', resp.data);
                    this.props.history.push('/user');
                },
                (err) => {
                    console.log('--err problem---', err);
                }
            );
    }
    render() {
        return (

            <div classNames="container register-form">
                <div classNames="form">
                    <div id="form-content">
                        <form action="SeedData.js">
                        <div class="row">
                            <div classNames="col-md-6">
                                <div classNames="form-group">
                                    <input type="text" classNames="form-control" placeholder="Nikname *" value="" />
                                </div>
                                <br/>
                                <div classNames="form-group">
                                    <input type="text" classNames="form-control" placeholder="Password *" value="" />
                                </div>
                                <br/>
                                <div classNames="form-group">
                                    <input type="text" classNames="form-control" placeholder="Confirm Password *" value="" />
                                </div>
                                <br/>
                            </div>
                            <button type="submit"  class="btnSubmit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default registration;