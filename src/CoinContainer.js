import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://www.ngccoin.com/usercontent/images/melt_value/1_Obv.jpg' },

            { side: 'tails', imgSrc: 'https://www.ngccoin.com/usercontent/images/melt_value/1_Rev.jpg' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(state => {
            return {
                curCoin: newCoin,
                nFlips: state.nFlips + 1,
                nHeads: state.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: state.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's Flip a Coin!</h2>
                <button onClick={this.handleClick} >Flip The Coin</button>
                {this.state.curCoin && <Coin info={this.state.curCoin} />}
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer;