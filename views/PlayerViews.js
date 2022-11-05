import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br/>
        {!playable ? 'Please wait...' : ''}
        <br />
        <div>
        how many fingers will you play(0-5)?
        </div>
        <br/>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(5)}
        >5</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component{
  render(){
    const {parent, playable, guess} = this.props;
    return(
      <div>
      {!playable ? 'Please wait...' : ''}
      <br />
      how many fingers will you guess(0-10)?<br/>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(0)}
      >0</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(1)}
      >1</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(2)}
      >2</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(3)}
      >3</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(4)}
      >4</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(5)}
      >5</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(6)}
      >6</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(7)}
      >7</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(8)}
      >8</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(9)}
      >9</button>
      <button
        disabled={!playable}
        onClick={() => parent.playHand(10)}
      >10</button>
    </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Winning = class extends React.Component{
  render(){
    const {numA, numB} = this.props;
    return(
      <div>
        Winning Number is: {numA+numB}
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;