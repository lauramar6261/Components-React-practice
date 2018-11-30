import React from 'react';
import './Avatar.css';

//Create an Avatar component which takes an image URL and presents that image with a border.

const Avatar = (props) => {
  console.log(props)
  const size = props.size
  return (
    <img src={props.data} alt="avatar" className={"round-corners" + " " + size}/>
  );
};

export default Avatar;
