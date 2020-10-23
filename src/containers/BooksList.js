import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { categoryFilter, removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, categoryFilter, filter,
}) => {
  const handleRemoveBook = id => removeBook(id);
  const handleFilterChange = e => categoryFilter(e.target.value);
  let bookList;

  if (filter === 'ALL') {
    bookList = books.map(book => (
      <Book book={book} key={Math.random()} handleRemoveBook={handleRemoveBook} />
    ));
  } else {
    bookList = books.filter(book => book.category === filter).map(book => (
      <Book book={book} key={Math.random()} handleRemoveBook={handleRemoveBook} />
    ));
  }

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
const mapStateToProps = state => (
  {
    books: state.books,
    filter: state.filter,
  }
);
const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  categoryFilter: category => dispatch(categoryFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
