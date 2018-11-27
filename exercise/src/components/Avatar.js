import React from 'react';
import './Avatar.css';

//Create an Avatar component which takes an image URL and presents that image with a border.

const Avatar = (props) => {
  console.log(props)
  return (
    <img src={props.data} alt="avatar" className='round-corners'/>
  );
};

export default Avatar;
