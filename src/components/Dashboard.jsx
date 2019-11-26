import React, {Component} from 'react';

class Dashboard extends Component {
	render() {
		const {player_bet, total_bet, players} = this.props;
		const single_style = {
			margin: '5px',
			padding: '5px',
            width: '33%',
		};
        const block_style = {
            'display': 'flex',
        };

		const dashboard_data = players.map(
			(p, index) => {
				let rate = (total_bet - player_bet[p]) / total_bet;
				if (isNaN(rate)) {
					rate = 0
				};
                rate = (rate + 1.0).toFixed(2);
				const total_player_bet = player_bet[p];
				return (<div key={index} style={single_style}>
					{p} 베팅 총액: {total_player_bet.toLocaleString()}
				</div>)
			}
		)
		return (
            <div>
                <h4>총 베팅금액: {total_bet}원</h4>
			    <div style={block_style}>
			    	{dashboard_data}
			    </div>
            </div>
		)
	}
}

export default Dashboard;
