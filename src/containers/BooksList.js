/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { categoryFilter, removeBook } from '../actions/index';
import NavBar from '../components/NavBar';

const BooksList = ({
  books, removeBook, categoryFilter, filter,
}) => {
  const handleRemoveBook = id => removeBook(id);
  const handleFilterChange = e => categoryFilter(e.target.value);
  let bookList;

  (filter === 'ALL') ? (bookList = books.map(book => (
    <Book book={book} key={Math.random()} handleRemoveBook={handleRemoveBook} />
  ))) : (bookList = books
    .filter(book => book.category === filter)
    .map(book => (
      <Book book={book} key={Math.random()} handleRemoveBook={handleRemoveBook} />
    )));

  return (
    <>
      <NavBar handleFilterChange={handleFilterChange} />
      <div className="container">
        {bookList}
      </div>
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
