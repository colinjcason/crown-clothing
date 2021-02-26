import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './components/header/Header'
import SignInPage from './pages/sign-in-page/SignInPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
