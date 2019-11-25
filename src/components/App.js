import React, {Component} from 'react';
import BettingSlot from './BettingSlot';
import PlayerList from './PlayerList';
import Dashboard from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            better_list: {
                '학짱': [],
                '꼬막': [],
                '민두': [],
            },            
            player_bet: {
                '학짱': 0,
                '꼬막': 0,
                '민두': 0, 
            },
            total_bet: 0,
        };

        this.players = ['학짱', '꼬막', '민두'];

        this.addNewBetter = this.addNewBetter.bind(this);
        this.removeBetter = this.removeBetter.bind(this);
    }

    addNewBetter(player_key, data) {
        const {better_list, player_bet, total_bet} = this.state;
        const selected_player = better_list[player_key];
        selected_player.push(data);
        const updated = {
            ...better_list,
            [player_key]: selected_player,
        };

        const selected_bet = player_bet[player_key];
        const updated_player_bet = selected_bet + parseInt(data.bet);
        const updated_bet = {
            ...player_bet,
            [player_key]: updated_player_bet,
        };

        const total_updated = total_bet + parseInt(data.bet);

        this.setState({
            better_list: updated,
            player_bet: updated_bet,
            total_bet: total_updated,
        })
    }

    removeBetter(player_key, index) {
        const {better_list, player_bet, total_bet} = this.state;
        const selected_player = better_list[player_key];
        const updated = [
            ...selected_player.slice(0, index),
            ...selected_player.slice(index + 1),
        ];
        
        const selected_bet = player_bet[player_key];
        const updated_player_bet = selected_bet + parseInt(selected_player[index].bet);
        const updated_bet = {
            ...player_bet,
            [player_key]: updated_player_bet,
        };

        const total_updated = total_bet + parseInt(selected_player[index].bet);

        this.setState({
            better_list: {
                ...better_list, 
                [player_key]: updated,
            },
            player_bet: updated_bet,
            total_bet: total_updated,
        })
    }

    render() {
        const {better_list, player_bet, total_bet} = this.state;
        return (
            <div>
                <BettingSlot
                    players={this.players} 
                    addNewBetter={this.addNewBetter}
                />
                <PlayerList
                    better_list={better_list}
                    players={this.players}
                    removeBetter={this.removeBetter}
                />
                <Dashboard
                    player_bet={player_bet}
                    total_bet={total_bet}
                    players={this.players}
                />
            </div>
        )
    }
}

export default App;
