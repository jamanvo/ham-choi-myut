import React, {Component} from 'react';

class BettingSlot extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bet: 0,
			player: this.props.players[0],
		}
	}

	onChangeValue(e, attr) {
		this.setState({
			[attr]: e.target.value
		})
	}

	onClickAddBetter() {
		const {addNewBetter} = this.props;
		const {name, bet, player} = this.state;

		const data = {
			name: name,
			bet: bet,
		};

		addNewBetter(player, data);
	}

	render() {
		const {players} = this.props;
		const {name, bet} = this.state;
		const options = players.map(
			(p, index) => (
				<option value={p} key={index}>{p}</option>
			)
		)

		return (
			<div>
				<select onChange={(e) => this.onChangeValue(e, 'player')}>
					{options}
				</select>
				<input type="text" value={name} onChange={(e) => this.onChangeValue(e, 'name')} />
				<input type="number" value={bet} onChange={(e) => this.onChangeValue(e, 'bet')} />
				<button onClick={() => this.onClickAddBetter()}>추가</button>
			</div>
		)
	}
}

export default BettingSlot;