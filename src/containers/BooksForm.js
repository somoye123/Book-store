import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions';
import Constants from '../common/constantModule';

const BooksForm = ({ addBook }) => {
  const [state, setState] = useState({
    title: '',
    category: 'Action',
    id: '',
  });

  const handleChange = e => (
    setState({ ...state, id: Math.floor(Math.random * 1000), [e.target.name]: e.target.value })
  );

  const handleSubmit = e => {
    const { title } = state;
    e.preventDefault();
    if (title) {
      addBook(state);
      setState({ id: '', title: '', category: 'Action' });
      e.target.reset();
    }
  };

  return (
    <form className="bookform-section" onSubmit={handleSubmit}>
      <h4>ADD NEW BOOK</h4>
      <input type="text" name="title" placeholder="Type a book title" value={state.title} onChange={handleChange} />
      <select onChange={handleChange} name="category">
        {Constants.categories.map(category => <option key={category}>{category}</option>)}
      </select>
      <button type="submit">Add a new book</button>
    </form>
  );
};

const mapDispatchToProps = {
  addBook,
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
