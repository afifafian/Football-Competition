import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { competitionReducer, favoriteReducer } from './reducers';

const reducers = combineReducers({
    competitionReducer,
    favoriteReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;