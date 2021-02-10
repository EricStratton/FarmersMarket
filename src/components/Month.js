import React from 'react';
import PropTypes from 'prop-types';

// const monthStyles = {
//   width:'300px',
//   paddingTop:'5px',
//   borderStyle:'solid',
//   borderColor:'#336699',
//   borderWidth:'1px',
//   paddingLeft:'3px',
//   paddingBottom:'2px',
//   boxSizing: 'inherit'
// }

function Month(props) {
  return (
    <>
      <div class='months'>
        <h3>{props.month}</h3>
        <hr />
        <ul>
            <li>{props.selection}</li>
        </ul>
      </div>
    </>
  )
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Month;

