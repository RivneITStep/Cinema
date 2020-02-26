import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../../action/authAction';

import { Link } from 'react-router-dom';
import './Default.css';


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
          {/* <label htmlFor="myChk" className="btn__confirm">Genres</label>
          <input type="checkbox" id="myChk" className="mychk" />
          <label className="meu__modal__bg" htmlFor="myChk"></label>
          <div className="meu__modal">
            <table  cellSpacing="0">
              <tbody>
                <tr>
                  <td className="menu_modal_leftcol">
                    <li><input type="checkbox" />биографический</li>
                    <li><input type="checkbox" />боевик</li>
                    <li><input type="checkbox" />вестерн</li>
                    <li><input type="checkbox" />военный</li>
                    <li><input type="checkbox" />детектив</li>
                    <li><input type="checkbox" />детский</li>
                    <li><input type="checkbox" />документальный</li>
                    <li><input type="checkbox" />драма</li>
                    <li><input type="checkbox" />исторический</li>
                    <li><input type="checkbox" />кинокомикс</li>
                    <li><input type="checkbox" />комедия</li>
                    <li><input type="checkbox" />короткометражный</li>
                    <li><input type="checkbox" />криминал</li>
                    <li><input type="checkbox" />мелодрама</li>
                    <li><input type="checkbox" />мистика</li>
                    <li><input type="checkbox" />мультфильм</li>
                    <li><input type="checkbox" />научный</li>
                    <li><input type="checkbox" />приключения</li>
                    <li><input type="checkbox" />семейный</li>
                    <li><input type="checkbox" />триллер</li>
                    <li><input type="checkbox" />ужасы</li>
                    <li><input type="checkbox" />фантастика</li>
                    <li><input type="checkbox" />фэнтези</li>
                  </td>
                  <td className="menu_modal_centcol">
                    <p>asdas</p>
                  </td>
                  <td className="menu_modal_rightcol">
                    <p>asdas</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                   <td className="menu_modal_successe">
                   <button>Successe</button>
                   </td>
                </tr>
                <tr>
                  <td className="menu_modal_close">
                  <button>Close</button>
                </td>
              </tr>
              </tfoot> 
            </table>
        </div> */}
        {/* ////// */}
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
      </header >
    );
  }
}

const mapState = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
}

export default connect(mapState, logout)(NavMenu)