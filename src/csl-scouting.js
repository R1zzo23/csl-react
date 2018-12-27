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
