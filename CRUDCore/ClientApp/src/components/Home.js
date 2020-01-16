import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Modal.css';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { Link } from "react-router-dom";
class Home extends Component {
    state = {
        isShowModal: false,
    }
    componentDidMount() {
    }
    redirectToAddUser = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/user/add');
    }
    render() {
        return (
            <div>

                <li className="nav-item">
                    <Link style={{color: 'white'}} className="text-light nav-link"  to="/Application" >Телохранитель</Link>
                    
                </li>

                <div className="row text-center text-lg-left">
                </div>
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        list: get(state, 'animal.list.data'),
        isListLoading: get(state, 'animal.list.loading'),
        isListError: get(state, 'animal.list.error')
    }
}

export default connect(mapStateProps)(Home);