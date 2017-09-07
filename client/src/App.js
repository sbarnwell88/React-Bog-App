import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatureList from './components/CreatureList';
import Creature from './components/Creature';
import NewCreature from './components/NewCreature';
import EditCreature from './components/EditCreature';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={CreatureList}/>
        <Route exact path='/creatures/:id' component={Creature} />
        <Route exact path='/creatures/new' component={NewCreature} />
        <Route exact path='/creatures/:id/edit' component={EditCreature} />
        </div>
      </Router>
    );
  }
}

export default App;
