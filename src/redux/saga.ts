import { all } from 'redux-saga/effects';
import storeTransferSaga from '../module-store-transfer/services/saga';

export default function* rootSaga() {
  yield all([storeTransferSaga()]);
}
