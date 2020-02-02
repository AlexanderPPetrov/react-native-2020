import * as countriesReducers from './countries';
import * as loadingReducers from './loading';
import {combineReducers} from 'redux';

export default combineReducers(Object.assign(
    countriesReducers,
    loadingReducers
));