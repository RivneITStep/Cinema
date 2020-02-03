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
    //console.log(this.props);
    const { isAuthenticated, user } = this.props;
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
                        <input type="checkbox" id="toggle" />
                        <label className="label" htmlFor="toggle">Genres</label>

                        <dialog >
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
                            <label className="close" htmlFor="toggle">close overlay</label>
                        </dialog>

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
              <Link className="menu__item" to="/home">CiNeMa</Link>
            </li>
            <li className="nav-item">
              {
                isAuthenticated ?
                  <Link className="menu__item" to="/profile">{user.name}</Link> :

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