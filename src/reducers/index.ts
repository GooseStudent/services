import { combineReducers } from 'redux';
import servicesReducer from './services';
import formReducer from './form';

const rootReducer = combineReducers({
  services: servicesReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;