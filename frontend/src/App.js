import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
// Pages 
import Navbar from './components/navbar';

import Home from './components/home';
import SpaceCard from './containers/spaceCard';
import './app.css'

function App() {
  return (
    <div>
      <Route to='/' component={Navbar} />
        <div className='bigSpace'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/spaceCard/:id' exact component={SpaceCard} />
          </Switch>
        </div>
    </div>
  );
}

export default App;

