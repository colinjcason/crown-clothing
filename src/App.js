import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={''} />
      </Switch>
    </div>
  );
}

export default App;
