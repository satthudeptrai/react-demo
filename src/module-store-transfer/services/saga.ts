import { all, call, put, takeLatest } from 'redux-saga/effects';
import {} from '../types';
import {} from './redux';
import axios from 'axios';
import { API_URL } from '../constants';

function* getWatchListSaga(action: any) {
  try {
    // const reps: any = yield call(getList, {});
    const reps = {};
    yield put({ type: {}, payload: reps });
  } catch (error) {
    yield put({ type: {} });
  } finally {
  }
}

const getList = async (params: any): Promise<any> => {
  return axios
    .get(`${API_URL}`, {
      params: {},
    })
    .then(resp => resp.data);
};

function* watchGetListSaga() {
  yield takeLatest('', getWatchListSaga);
}

export default function* storeTransferSaga() {
  yield all([watchGetListSaga()]);
}
