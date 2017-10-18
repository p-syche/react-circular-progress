import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';

class App extends Component {

  render() {
    return (
      <div className="Circular Progress with React">
        <h2>Default progress button (success and error)</h2>

        <div className="btn-container" >
          <div className="column">
            <Button key="first-button" answer="success" />
          </div>
          <div className="column">
            <Button key="second-button" answer="error" />
          </div>
        </div>



      </div>
    );
  }
}

export default App;
