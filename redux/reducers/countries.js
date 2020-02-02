import * as types from '../types';

const initialState = [];

export function countries(state = initialState, action) {
    switch (action.type) {
        case types.SET_COUNTRIES:
            return [...action.payload]
        default:
            return state;
    }
}
