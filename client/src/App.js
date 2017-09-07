import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatureList from './components/CreatureList';
import Creature from './components/Creature';
import NewCreature from './components/NewCreature';
import EditCreature from './components/EditCreature';
import SignUp from './components/SignUp';
import GlobalNav from './components/GlobalNav';
import SignIn from './components/SignIn';
import { setAxiosDefaults } from './util';

class App extends Component {

  componentWillMount() {
    setAxiosDefaults()
  }

  render() {
    return (
      <Router>
        <div>
           <GlobalNav /> 
        <Route exact path='/' component={CreatureList}/>
        <Route exact path='/creatures/:id' component={Creature} />
        <Route exact path='/creatures/new' component={NewCreature} />
        <Route exact path='/creatures/:id/edit' component={EditCreature} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
