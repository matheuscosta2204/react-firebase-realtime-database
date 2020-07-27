import firebase from '../config';
export const LOAD_BOOKS = 'LOAD_BOOKS';

export const loadBooks = () => dispatch => {
    const booksRef = firebase.database().ref('Books');
    booksRef.on('value', snapshot => {
        dispatch({
            type: LOAD_BOOKS,
            payload: snapshot.val()
        });
    })
}