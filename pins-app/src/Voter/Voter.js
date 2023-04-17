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
        
        this.increment1 = this.increment1.bind(this);
        this.decrement1 = this.decrement1.bind(this);
        this.increment2 = this.increment2.bind(this);
        this.decrement2 = this.decrement2.bind(this);
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
                        <button className="button-vote" onClick={this.increment1}>Up</button>
                        <button className="button-vote" onClick={this.decrement1}>Down</button>
                    </div>
                    <div className='column'>
                        <img src={require('../Images/hearthStone2.PNG')} alt="hearthStone1"/>
                        <div>{this.state.score2}</div>
                        <button className="button-vote" onClick={this.increment2}>Up</button>
                        <button className="button-vote" onClick={this.decrement2}>Down</button>
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

    increment1(){
        this.setState(
            {
                score1: this.state.score1 + 1
            },() => {
                this.getWinner();
            });
    }

    increment2(){
        this.setState(
            {
                score2: this.state.score2 + 1
            }, () => {
                this.getWinner();
            });
    }


    decrement1(){
        this.setState(
            {
                score1: this.state.score1 - 1
            }, () => {
                this.getWinner();
        });
    }

    decrement2(){
        this.setState(
            {
                score2: this.state.score2 - 1
            }, () => {
                this.getWinner();
            });
    }
}

export default Voter