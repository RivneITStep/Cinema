import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../action/authAction";
import './Nav.css'
class NavMenu extends Component {
    state = {}
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <header>
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                    <li className="nav-item">
                        <img src="../../../public/favico_1.ico" alt="asd"/>
                    </li>
                        <li className="nav-item">
                            <Link className="menu__item" to="/">CiNeMa</Link>
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <Link className="menu__item" to="/userprofile">{user.name}</Link> :

                                    <Link className="menu__item" to="/registration">Register</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <Link className="menu__item" to="/" onClick={(e) => { e.preventDefault(); this.props.logout(); }}>LogOut</Link> :

                                    <Link className="menu__item" to="/login">Login</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="menu__item" to="/upload">Add film</Link>
                        </li>
                    </ul>
                </div>
                {/* <div >
                    <p><img src="Registration/Images/home.png" alt/></p>
                </div> */}
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