import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../assets/spinner.JPG';
import Constant from '../common/constantModule';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <article className="card mb-3 p-4">
      <div className="row no-gutters">
        <div className="col-md-6">
          <span className="text-secondary">{category}</span>
          <h5 className="font-weight-bold mb-0 mt-1">{title}</h5>
          <span className="text-primary font-weight-light">{Constant.authors[Math.floor(Math.random() * 6)]}</span>
          <div className="mt-3">
            <span className="text-primary font-weight-light btn p-0">Comments</span>
            <button type="button" className="text-primary btn font-weight-light border-right border-left mx-3" onClick={() => handleRemoveBook(id)}>Remove</button>
            <span className="text-primary font-weight-light btn p-0">Edit</span>
          </div>
        </div>
        <div className="col-md-3 border-right">
          <div className="d-flex">
            <img src={Spinner} alt="Spinner" />
            <div className="m-2 p-1">
              <h3 className="font-weight-normal mb-0">
                {Math.floor(Math.random() * 100)}
                %
              </h3>
              <small className="text-secondary">Completed</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 pl-5">
          <small className="text-secondary font-weight-light">CURRENT CHAPTER</small>
          <h6 className="py-1">
            <span>
              Chapter
              {' '}
              {Math.floor(Math.random() * 100)}
            </span>
          </h6>
          <button type="button" className="btn btn-primary w-100 mt-3">UPDATE PROGRESS</button>
        </div>
      </div>
    </article>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
