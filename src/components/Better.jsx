import React, {Component} from 'react';
import '../styles/Better.css';

class Better extends Component {
	onClickRemoveBetter() {
		const {player, index, removeBetter} = this.props;
		
		removeBetter(player, index);
	}

	render() {
		const {data, player_bet, total_bet} = this.props;
		const button_style = {
			marginLeft: '5px',
		};
        const rate = (parseInt(data.bet) / player_bet) * total_bet;

		return (
			<div className="better">
				이름: {data.name}, 베팅금액: {parseInt(data.bet).toLocaleString()}, 예상배당금: {rate} 
				<button onClick={() => this.onClickRemoveBetter()} style={button_style}>베팅 취소</button>
			</div>
		)
	}
}

export default Better;
