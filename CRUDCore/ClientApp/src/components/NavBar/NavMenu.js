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

                <div id="base_menu">
                    <div className="flip">
                        <div className="flip-inner">
                            <div className="flip-front">
                                <Link className="ped" to="/"></Link>
                            </div>
                            <div className="flip-back">
                                <Link className="ped" to="/"></Link>
                            </div>
                        </div>
                    </div>
                    {/* ////// */}
                    <label className="dropdown">

                        <div className="dd-button">
                            Dropdown
                        </div>

                        <input type="checkbox" className="dd-input" id="test" />

                        <form className="dd-menu">
                            <li>аниме</li>
                            <li>биографический</li>
                            <li>боевик</li>
                            <li>вестерн</li>
                            <li>военный</li>
                            <li>детектив</li>
                            <li>детский</li>
                            <li>документальный</li>
                            <li>драма</li>
                            <li>исторический</li>
                            <li>кинокомикс</li>
                            <li>комедия</li>
                            <li>короткометражный</li>
                            <li>криминал</li>
                            <li>мелодрама</li>
                            <li>мистика</li>
                            <li>мультфильм</li>
                            <li>научный</li>
                            <li>приключения</li>
                            <li>семейный</li>
                            <li>триллер</li>
                            <li>ужасы</li>
                            <li>фантастика</li>
                            <li>фэнтези</li>
                        </form>

                    </label>

                    {/* /////// */}
                    <div className="search-button">
                        <div className="container">
                            <span className="lupa">
                                <i className="fa fa-search"></i>
                            </span>
                            <input type="search" id="search" placeholder="Поиск по сайту" />
                        </div>
                    </div>
                </div>


                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li className="nav-item">
                            <img src="../../../public/favico_1.ico" alt="asd" />
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
                        <li className="nav-item">
                            <Link className="menu__item" to="/test">Test</Link>
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