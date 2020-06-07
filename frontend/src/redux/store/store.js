import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user-reducer';

const middleware = [thunk];

const baseReducer = combineReducers({
  profile: userReducer,
});

const store = createStore(
  baseReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
