import React from 'react';
import { connect } from 'react-redux';

//import { logout } from '../../auth/Login/actions';

import { Link } from 'react-router-dom';
//import '../../NavBar/NavMenu.css';


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

        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">Буратіно</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/">Мальвіна</a>
              <a class="nav-item nav-link active" href="/gallery.html">Галерея <span class="sr-only">(current)</span></a>

            </div>
          </div>
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/login.html">Вхід</a>
            <a class="nav-item nav-link" href="/register.html">Реєстрація</a>
          </div>
        </nav> */}
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
                  <Link className="menu__item" to="/" onClick={(e) => { e.preventDefault(); }}>LogOut</Link> :

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

export default connect(mapState)(NavMenu)