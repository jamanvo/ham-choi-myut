import React, {Component} from 'react';
import Player from './Player';
import '../styles/PlayerList.css';

class PlayerList extends Component {
	render() {
		const {better_list, players, removeBetter} = this.props;
		const player_list = players.map(
			(p, index) => (
				<Player
					player={p}
					betters={better_list[p]}
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