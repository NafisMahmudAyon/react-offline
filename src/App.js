import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <Router>
      <div>
        <h1>Video Player</h1>
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/video/:id" component={VideoPlayer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
