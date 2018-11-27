import React from 'react';
import './Badge.css';

//Create an Avatar component which takes an image URL and presents that image with a border.

const Badge = (props) => {
  let num = props.data
  if (num <  50 ) {
      return (
    <div class="numberCircle red">{num}</div>
      )
  } else {
    return (
  <div class="numberCircle blue">{num}</div>
    )
  }
};

export default Badge;
