import { combineReducers } from 'redux';
import dressingReducer from './dressingReducer'; 
import dressingReducerLifeCycle from './dressingReducerLifeCycle'; 
export const rootReducer = combineReducers({
    dressingReducer,
    dressingReducerLifeCycle
})