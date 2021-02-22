import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Components/layout/Navigation';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navigation />
        </header>

      </div>
    </Router>
  );
}

export default App;
