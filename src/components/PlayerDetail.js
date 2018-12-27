import React from 'react';
import PlayerCard from './PlayerCard';
import Traits from './Traits';

const PlayerDetail = React.createClass({
  render() {
    const { id } = this.props.params;

    // index of the posts
    // finds the correct object index from data that matches the end of
    // the URL which we titled 'postId' on reduxstagram.js router
    const i = this.props.players.findIndex((player) => player.playerId === id)
    // grabs the object at the index we are looking for
    const player = this.props.players[i];

    // get us the player
    return (
      <div className="single-player">
        <PlayerCard i={i} player={player} {...this.props} />
        <Traits {...this.props}/>
      </div>
    )
  }
});

export default PlayerDetail;
