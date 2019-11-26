import React, {Component} from 'react';
import Player from './Player';
import '../styles/PlayerList.css';

class PlayerList extends Component {
	render() {
		const {better_list, players, player_bet, total_bet, removeBetter} = this.props;
		const player_list = players.map(
			(p, index) => (
				<Player
					player={p}
					betters={better_list[p]}
                    player_bet={player_bet[p]}
                    total_bet={total_bet}
					removeBetter={removeBetter}
					key={index}
				/>
			)
		)

		return (
			<div className="player-list">
				{player_list}
			</div>
		)
	}
}

export default PlayerList;
