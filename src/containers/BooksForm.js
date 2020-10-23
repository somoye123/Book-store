import React from 'react';
import Constants from '../common/constantModule';

const BooksForm = () => (
  <form className="bookform-section">
    <h4>ADD NEW BOOK</h4>
    <input type="text" />
    <select>
      {Constants.categories.map(category => <option key={category}>{category}</option>)}
    </select>
    <button type="submit">Add a new book</button>
  </form>
);

export default BooksForm;
