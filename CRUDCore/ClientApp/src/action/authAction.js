﻿import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAutorizationToken';


export function setCurrentUser(user) {
    console.log("setCurrentUser");
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}

export function login(data) {
    return dispatch => {
        return axios.post('api/Account/login', data)
            .then(res => {
                var token = res.data;
                var user = jwt.decode(token);
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
            });
    }
}

export function register(data) {
    return dispatch => {
        return axios.post('api/Account/register', data)
         .then(res => {
            var token = res.data;
            var user = jwt.decode(token);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(user));
        });
    }
}
export function show_data() {
        return  axios.get(`api/Users/`)
        .then(res => {
          const data= res.data;
          this.setState({ data});
        })
}