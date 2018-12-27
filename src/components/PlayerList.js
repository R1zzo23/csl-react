import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = React.createClass({
  render() {
    return (
      <div className="player-list">
        {this.props.players.map((player, i) => <PlayerCard {...this.props} key={i} i={i} player={player} />)}
      </div>
    )
  }
});

export default PlayerList;
