import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import setAutorizationToken from './utils/setAutorizationToken';
import { setCurrentUser } from './action/authAction';
import jwt from 'jsonwebtoken';
import history from './history';
// import * as reducers from './store/reducers';
// const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
if (localStorage.jwtToken) {
    let token = localStorage.jwtToken;
    let user = jwt.decode(token);
    setAutorizationToken(token);
    store.dispatch(setCurrentUser(user));
    
}

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));

