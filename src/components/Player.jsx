import React, {Component} from 'react';
import BetterList from './BetterList';
import Better from './Better';
import '../styles/Player.css';

class Player extends Component {
	render() {
		const {player, betters, player_bet, total_bet, removeBetter} = this.props;
		const better_list = betters.map(
			(b, index) => (
				<Better
					player={player}
					data={b}
					index={index}
					key={index}
                    player_bet={player_bet}
                    total_bet={total_bet}
					removeBetter={removeBetter}
				/>
			)
		);
		const player_style = {
			display: 'flex',
			justifyContent: 'center',
		};

		return (
			<div className="player">
				<div style={player_style}>{player}</div>
				<BetterList>
					{better_list}
				</BetterList>
			</div>
		)
	}
}

export default Player;
