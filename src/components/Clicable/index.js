import React from 'react';
import PropTypes from 'prop-types';

const ClicableElement = ({ child, click, keyDown }) => (
  <button onClick={click} onKeyDown={keyDown} type="button" style={{ cursor: 'pointer', padding: 0 }}>
    {child}
  </button>
);

export default ClicableElement;

ClicableElement.propTypes = {
  child: PropTypes.element.isRequired,
  click: PropTypes.func,
  keyDown: PropTypes.func,
};

ClicableElement.defaultProps = {
  click: null,
  keyDown: null,
};
