import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
// Pages 
import Navbar from './components/navbar';

import Home from './components/home';
import SpaceCard from './containers/spaceCard';


function App() {
  return (
    <div className='app_container'>
      <Route to='/' component={Navbar} />
        <div className='page-container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/spaceCard/:id' exact component={SpaceCard} />
          </Switch>
        </div>
    </div>
  );
}

export default App;

