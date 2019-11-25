import React, {Component} from 'react';
import '../styles/BetterList.css';

class BetterList extends Component {
	render() {
		const {children} = this.props;

		return (
			<div className="better-list">
				{children}
			</div>
		)
	}
}

export default BetterList;