import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../action/authAction";
import './Nav.css'
class NavMenu extends Component {
    state = {}
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <header>
                <nav className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar navbar-light">
                    <div className="container">
                        <Link className="text-light nav-link" to="/">CiNeMa</Link>
                        <button type="button" className="mr-2 navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                            <ul className="navbar-nav flex-grow">
                                <li className="nav-item">
                                    {
                                        isAuthenticated ?
                                            <Link className="text-light nav-link" to="/userprofile">{user.name}</Link> :
                                    
                                            <Link className="text-light nav-link" to="/registration">Register</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                {
                                    isAuthenticated ?
                                        <Link className="text-light nav-link" to="/" onClick={(e)=> {e.preventDefault(); this.props.logout();}}>LogOut</Link>:
                                    
                                        <Link className="text-light nav-link" to="/login">Login</Link>
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

NavMenu.propTypes = {
    logout: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  }

export default connect(mapStateToProps, { logout })(NavMenu);