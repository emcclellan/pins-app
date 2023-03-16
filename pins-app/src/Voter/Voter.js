import React from 'react';
import './Voter.css';

class Voter extends React.Component{
    constructor(props){
        super(props);
        this.state = {score: 0};
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render(){
        return(
            <div>
                <img src={require('../Images/hearthStone1.PNG')} alt="hearthStone1"/>
                <div>{this.state.score}</div>
                <button className="button-vote" onClick={this.increment}>Up</button>
                <button className="button-vote" onClick={this.decrement}>Down</button>
            </div>

        );
    }

    increment(){
        this.setState(state => ({
            score: state.score + 1 
        }));
    }

    decrement(){
        this.setState(state => ({
        score: state.score - 1
        }));
    }
}

export default Voter