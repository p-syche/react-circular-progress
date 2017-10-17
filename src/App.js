import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
        buttonStateClean: true,
        buttonStateLoading: null,
        buttonStateSuccess: null,
        buttonStateError: null,
        paths: {
          circle: ""
        }
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.undrawStrokes = this.undrawStrokes.bind(this);

  }

  undrawStrokes() {
    this.setState({
      buttonStateClean: true,
      buttonStateLoading: null,
      paths: {
        circle: ""
      }
    });

    const checkin = [].slice.call(this.state.paths.circle);
    console.log(checkin, checkin.length)
  }

  buttonHandler() {
    const completeCircle = "m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
    const completeCircleLength = completeCircle.length;
    
    for( var i = 0, len = completeCircle.length; i < len; ++i ) {
      completeCircle[ i ].style.strokeDashoffset = completeCircleLength[ i ] * ( 0 );
      console.log('now?')
    }


    this.setState({
        buttonStateClean: false,
        buttonStateLoading: 'loading',
    });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button 
          buttonHandler={this.buttonHandler} 
          buttonState={this.state}
          undrawStrokes={this.undrawStrokes}
        />
      </div>
    );
  }
}

export default App;
