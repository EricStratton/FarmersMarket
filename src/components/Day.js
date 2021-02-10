import React from 'react';
import PropTypes from 'prop-types';

function Day(props) {
  return (
    <>
      <h3>{props.day}</h3>
      <hr />
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;