import axios from 'axios';
import config from './config';

const intance = axios.create({
    baseURL: config.getFullBaseUrl(),
});

export function get(path, params) {
    return intance.get(path, {
        params
    });
}

export function post(path, params) {
    return intance.post(path, params);
}

export default {
    get,
    post
}
