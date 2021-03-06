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
        const input_style = {
            padding: '5px',
            borderRadius: '10px',
            fontSize: '1.1em',
        }

		return (
			<div>
				<select style={input_style} onChange={(e) => this.onChangeValue(e, 'player')}>
					{options}
				</select>
				<input type="text" style={input_style} value={name} onChange={(e) => this.onChangeValue(e, 'name')} />
				<input type="number" style={input_style} value={bet} onChange={(e) => this.onChangeValue(e, 'bet')} />
				<button style={input_style} onClick={() => this.onClickAddBetter()}>추가</button>
			</div>
		)
	}
}

export default BettingSlot;
