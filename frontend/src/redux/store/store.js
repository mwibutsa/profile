import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user-reducer';
import skillsReducer from '../reducers/skills-reducer';
import projectsReducer from '../reducers/project-reducer';

const middleware = [thunk];

const baseReducer = combineReducers({
  profile: userReducer,
  userSkills: skillsReducer,
  userProjects: projectsReducer,
});

const store = createStore(
  baseReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
