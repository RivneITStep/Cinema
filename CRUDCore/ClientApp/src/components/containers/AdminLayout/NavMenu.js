import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../../action/authAction';

import { Link } from 'react-router-dom';
import '../../NavBar/Nav.css';


export class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <header>
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
              <Link className="menu__item" to="/admin/home">CiNeMa</Link>
            </li>
            <li className="nav-item">
              {
                isAuthenticated ?
                  <Link className="menu__item" to="/admin/profile">{user.name}</Link> :

                  <Link className="menu__item" to="/admin/register">Register</Link>
              }
            </li>
            <li className="nav-item">
              {
                isAuthenticated ?
                  <Link className="menu__item" to="/" onClick={(e) => { e.preventDefault(); this.props.logout(); }}>LogOut</Link> :

                  <Link className="menu__item" to="/admin/login">Login</Link>
              }
            </li>
            <li className="nav-item">
              <Link className="menu__item" to="/admin/add_film">Add film</Link>
            </li>
            <li className="nav-item">
              <Link className="menu__item" to="/admin/test">Test</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapState = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapState, logout)(NavMenu)