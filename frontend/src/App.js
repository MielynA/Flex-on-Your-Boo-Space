import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
// Pages 
import Navbar from './components/navbar';

import Home from './components/home';
import SpaceCard from './containers/searchCard';

function App() {
  return (
    <div>
      <Route to='/' component={Navbar} />
        <div>
          <Switch>
            <Route to='/' exact component={Home} />
            <Route to='/spaceCard/:id' exact component={SpaceCard} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
