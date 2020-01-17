import { combineReducers } from "redux";
import counter from './reducers/counter';
import auth from './reducers/auth';

export default combineReducers({
    counter,
    auth,
});