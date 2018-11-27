import React from 'react';
import './Avatar.css';

//Create an Avatar component which takes an image URL and presents that image with a border.

const Avatar = () => {
  return (
    <img src="https://wordsmith.org/words/images/avatar2_large.png" alt="avatar" className='round-corners'/>
  );
};

export default Avatar;
