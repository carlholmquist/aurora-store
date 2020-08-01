import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component.jsx'
import { Route, Switch } from 'react-router-dom';

const Hats = () => {
  return (
    <h1>HATS</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
