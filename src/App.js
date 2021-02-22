import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Components/layout/Navigation';
import Page from './Components/layout/Page';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navigation />
        </header>
        <main>
          <Page/>
        </main>
      </div>
    </Router>
  );
}

export default App;
