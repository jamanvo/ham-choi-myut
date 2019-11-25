import React, {Component} from 'react';

class Dashboard extends Component {
	render() {
		const {player_bet, total_bet, players} = this.props;
		const single_style = {
			margin: '5px',
			padding: '5px'
		};

		const dashboard_data = players.map(
			(p, index) => {
				let rate = (player_bet[p] / total_bet).toFixed(2);
				if (isNaN(rate)) {
					rate = 0
				};
				const total_player_bet = player_bet[p];
				return (<div key={index} style={single_style}>
					{p} : {total_player_bet}, 배당률: ({rate || 0})
				</div>)
			}
		)
		return (
			<div>
				{dashboard_data}
			</div>
		)
	}
}

export default Dashboard;