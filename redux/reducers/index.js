import * as countriesReducers from './countries';
import {combineReducers} from 'redux';

export default combineReducers({
    countries: countriesReducers.countries
});