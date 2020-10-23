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
    setState({ ...state, id: Math.floor(Math.random() * 1000), [e.target.name]: e.target.value })
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
    <div className="container border-top p-4 mt-4">
      <h5 className="text-secondary font-weight-bold mb-3">ADD NEW BOOK</h5>
      <form className="d-flex justify-content-between" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Type a book title" value={state.title} onChange={handleChange} className="w-50" />
        <select onChange={handleChange} name="category" className="w-25 mx-5">
          {Constants.categories.map(category => <option key={category}>{category}</option>)}
        </select>
        <button type="submit" className="btn btn-primary w-25">Add a new book</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addBook,
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
