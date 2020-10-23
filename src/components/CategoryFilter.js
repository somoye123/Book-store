import React from 'react';
import PropTypes from 'prop-types';
import Constant from '../common/constantModule';

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange}>
    <option value="ALL">ALL</option>
    {Constant.categories.map(category => (
      <option value={category} key={category}>{category}</option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
