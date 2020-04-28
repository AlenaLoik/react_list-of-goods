import React from 'react';
import './Items.css';
import PropTypes from 'prop-types';

export const Items = ({ items }) => (
  <ul className="itemList">
    {items.map(good => (
      <li key={good}>{good}</li>
    ))}
  </ul>
);

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
