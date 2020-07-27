import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadBooks } from './actions/books';

const TestFirebase = ({ books, loadBooks }) => {

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <div>
            {books.map(book => (
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.price}</h2>
                </div>
            ))}
        </div>
    )
};

function mapStateToProps({ books }) {
    return {
        books: books.books
    }
}

export default connect(mapStateToProps, { loadBooks })(TestFirebase);