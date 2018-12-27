import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import players from './players';
import comments from './ratings';

const rootReducer = combineReducers({players, ratings, routing: routerReducer});

export default rootReducer;
