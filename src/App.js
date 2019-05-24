import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';

// ROUTES
import routes from './routes';

// COMPONENTS
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  );
}

export default App;
