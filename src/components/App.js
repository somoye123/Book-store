import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}
