import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import Completed from './pages/Completed';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <Router>
          <Route exact path="/" component={() => <HomePage/>}/>
          {/*for link www.x.com/tutorial/1 => id '1' will be passed to TutorialPage component*/}
          {/*<Route path="/tutorial/:tutorialStep" render={({ match }) => <TutorialPage id={match.params.tutorialStep: string}/>}/>*/}
          <Route exact path="/success" component={() => <Completed/>}/>
      </Router>
    </div>
  );
}

export default App;
