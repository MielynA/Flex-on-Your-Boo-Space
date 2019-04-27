import React from 'react'; 
import {Route} from 'react-router-dom';
// Pages 
import Navbar from './components/Navbar';

import Home from './components/home';
import SpaceCard from './containers/searchCard';

function App() {
  return (
    <div>
      <Route to='/' component={Navbar} />
        <div>
          <Route to='/' exact component={Home} />
          <Route to='/spaceCard/:id' exact component={SpaceCard} />

        </div>
    </div>
  );
}

export default App;
