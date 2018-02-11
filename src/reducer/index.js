import { combineReducers } from 'redux';
import arts from './arts';
import genres from './genres';

export const reducers = combineReducers({
    genres,arts
})