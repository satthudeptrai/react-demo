import { AppReducerType } from './types';
import storeTransferReducer from '../module-store-transfer/services/redux';
import { combineReducers } from 'redux';

export default combineReducers({
  [AppReducerType.STORE_TRANSFER]: storeTransferReducer,
});
