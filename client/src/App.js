import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatureList from './components/CreatureList';
import Creature from './components/Creature';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={CreatureList}/>
        <Route exact path='/creatures/:id' component={Creature} />
        </div>
      </Router>
    );
  }
}

export default App;
