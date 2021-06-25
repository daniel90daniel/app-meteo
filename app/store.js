import { createStore, combineReducers } from 'redux';
import locationReducer from './reducers/locationReducer';

const rootReducer = combineReducers({
  locationReducer: locationReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;