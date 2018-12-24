import React from 'react';
import { Link } from 'react-router-dom';

export function PlayerCard(props) {

  const player = props.player;

  return (
    <div className={props.colNum}>
      <Link to={`/players/${player.id}`}>
        <div className="card csl-card">
          <img className="card-img-top" src={player.schoolImage} alt={player.school}></img>
          <div className="card-block">
            <h6 className="card-subtitle">{player.school} &#183; {player.age} years old </h6>
            <h4 className="card-title">{player.name}</h4>
            <p className="card-text">{player.position} &#183; {player.height} &#183; {player.weight} lbs</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
