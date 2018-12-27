import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = React.createClass({
  render() {
    const { player, i, scouts } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${player.playerId}`}>
            <img src='https://cdn.d1baseball.com/logos/teams/256/unc.png' alt="filler picture" className="grid-photo" />
          </Link>
        </div>
        <figcaption>
          <p>{player.fullName} &#183; {player.pos} &#183; {player.age}</p>
          <div className='control-buttons'>
            <button onClick={this.props.incrementScouts.bind(null, i)} className="scouts">Times Scouted: {player.scouts}</button>
          </div>
        </figcaption>
      </figure>
    )
  }
});

export default PlayerCard;
