import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51Hjf3IFdDVgOC4LwIuxEZQ3S1Hz3eVGkeBaX3tzdXRthW0I0NgHzYBpMh9R6gY0sM5FUXwlaKRHjFz0CjGAZ094D00XgIzJQ7d')

function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('Authenticated user', authUser)
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  }, [])
  return (
  
    <div className="app">
            
      
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/payment'>
          <Header /> 
            <Elements stripe={promise}>
             <Payment/>
            </Elements>
          </Route>
          <Route path='/checkout'>
          <Header /> 
            <Checkout />
          </Route>
          <Route path='/'>
          <Header /> 
            <Home />
          </Route>
        </Switch>

      

    </div>
  );
}

export default App;
