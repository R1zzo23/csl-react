/*import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './shared/Header';
import { PlayerList } from './components/player/PlayerList';
import { PlayerDetail } from './components/player/PlayerDetail';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/players" component={PlayerList}/>
            <Route exact path="/players/:id" component={PlayerDetail}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
*/

import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/_main.scss';

// Import Components
import App from './components/App';
import PlayerDetail from './components/PlayerDetail';
import PlayerList from './components/PlayerList';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PlayerList}></IndexRoute>
        <Route path="/view/:id" component={PlayerDetail}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
