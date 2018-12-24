import React from 'react';
import {PlayerCard} from './PlayerCard';

export class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [{
        id: 1,
        name: "Zion Williamson",
        school: "Duke",
        age: 19,
        height: "6-6",
        weight: 280,
        position: "Center",
        playerImage: "https://a.espncdn.com/photo/2018/1220/r480084_600x400_3-2.jpg",
        schoolImage: "https://d1si3tbndbzwz9.cloudfront.net/basketball/team/329/logo.png"
      },
      {
        id: 2,
        name: "R.J. Barrett",
        school: "Duke",
        age: 19,
        height: "6-6",
        weight: 210,
        position: "Shooting Guard",
        playerImage: "https://s3media.247sports.com/Uploads/Assets/997/512/8512997.jpg",
        schoolImage: "https://d1si3tbndbzwz9.cloudfront.net/basketball/team/329/logo.png"
      },
      {
        id: 3,
        name: "Bol Bol",
        school: "Oregon",
        age: 19,
        height: "7-2",
        weight: 235,
        position: "Center",
        playerImage: "https://cdn.vox-cdn.com/thumbor/h7BkftGmtK7zWvseHEdPRaJPBWQ=/0x152:2411x3622/1200x800/filters:focal(1072x589:1456x973)/cdn.vox-cdn.com/uploads/chorus_image/image/62355454/usa_today_11632122.0.jpg",
        schoolImage: "http://grfx.cstv.com/schools/tenn/graphics/logos/png/oregon.png"
      },
      {
        id: 4,
        name: "Nassir Little",
        school: "North Carolina",
        age: 19,
        height: "6-6",
        weight: 220,
        position: "Small Forward",
        playerImage: "https://waitingfornext-a.akamaihd.net/wp-content/uploads/2018/11/Nassir-Little-dunk-600x400.jpg",
        schoolImage: "https://cdn.d1baseball.com/logos/teams/256/unc.png"
      }]
    }
  }

  renderPlayers() {
    return this.state.players.map((player, index) => {
      return (
        <PlayerCard key={index}
                    player={player}
                    colNum='col-md-3 col-xs-6'/>
      )
    });
  }

  render() {
    return (
      <section id="playerListing">
        <h1 className="page-title text-center">Your Home for CSL Scouting</h1>
        <div className="row">
          {this.renderPlayers()}
        </div>
      </section>
    )
  }
}
