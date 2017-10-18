import React, { Component } from 'react';
import './App.css';

import Button from './Button';

class App extends Component {

  render() {
    return (
      <div className="box">
          <Button key="first-button" answer="success" />
          <Button key="second-button" answer="error" />
      </div>
    );
  }
}

export default App;
