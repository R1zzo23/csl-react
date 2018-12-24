import React, { Component } from 'react';
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
