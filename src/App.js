import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './components/header/Header'
import SignInPage from './pages/sign-in-page/SignInPage'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions.js'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
