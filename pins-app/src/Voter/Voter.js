import React from 'react';
import './Voter.css';

class Voter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score1: 0,
            score2: 0,
            winner: "undecided"
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.winner = this.getWinner.bind(this);
    }

    render(){
        return(
            <div>
                <div>
                    winner is: {this.state.winner}
                </div>
                <div className='row'>
                    <div className='column'>
                        <img src={require('../Images/hearthStone1.PNG')} alt="hearthStone1"/>
                        <div>{this.state.score1}</div>
                        <button className="button-vote" onClick={(e) => this.increment('1', e)}>Up</button>
                        <button className="button-vote" onClick={(e) => this.decrement('1', e)}>Down</button>
                    </div>
                    <div className='column'>
                        <img src={require('../Images/hearthStone2.PNG')} alt="hearthStone1"/>
                        <div>{this.state.score2}</div>
                        <button className="button-vote" onClick={(e) => this.increment('2', e)}>Up</button>
                        <button className="button-vote" onClick={(e) => this.decrement('2', e)}>Down</button>
                    </div>
                </div>
            </div>
        );
    }

    getWinner(){
        if (this.state.score1 > this.state.score2){
            this.setState(state => ({
                winner: "Hearth Stone 1"
            }));
        }
        else{
            this.setState(state => ({
                winner: "Hearth Stone 2"
            }))
        }
    }

    increment(contestant){
        if (contestant === '1'){
            this.setState(state => ({
                score1: state.score1 + 1
            }));
        }
        else{
            this.setState(state => ({
                score2: state.score2 + 1
            }));
        }
        //this.getWinner();
    }

    decrement(contestant){
        
        if (contestant === '1'){
            this.setState(state => ({
                score1: state.score1 - 1
            }));
        }
        else{
            this.setState(state => ({
                score2: state.score2 - 1
            }))
        }
        //this.getWinner();
    }
}

export default Voter