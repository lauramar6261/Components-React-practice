// Score - badge component
import React from 'react';
import './UserCard.css';
import Avatar from './Avatar';
import Badge from './Badge';


const UserCard = (props) => {
  let name = props.name
  let image = props.image
  let rank = props.rank
  let score = props.score

  return (
    <section className="rectangle">
      <div > {name} </div>
      <Avatar data={image} size="resize"/>
      <div> {rank} </div>
      <Badge data={score} />
    </section>
  );
};

export default UserCard;
