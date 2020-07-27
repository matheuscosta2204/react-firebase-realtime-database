import { LOAD_BOOKS } from '../actions/books';

const initialState = {
    books: []
};

export default function books(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOAD_BOOKS:
            return { 
                ...state, 
                books: payload 
            }
        default:
            return state;
    }
}