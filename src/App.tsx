import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlyoutContainer from './containers/FlyoutContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          After successful sign in using the google account, user name will show up here!
        </p>
        <FlyoutContainer title="Google sign in"/>
      </header>
    </div>
  );
};

export default App;
