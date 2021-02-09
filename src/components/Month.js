import React from 'react';
import PropTypes from 'prop-types';

function Month(props) {
  return (
    <>
      <h3>{props.month}</h3>
      <ul>
      <li>{props.selection}</li>
      </ul>
    </>
  )
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Month;

