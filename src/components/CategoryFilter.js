import React from 'react';
import Constant from '../common/constantModule';

const CategoryFilter = () => (
  <select>
    <option value="ALL">ALL</option>
    {Constant.categories.map(category => (
      <option value={category} key={category}>{category}</option>
    ))}
  </select>
);

export default CategoryFilter;
