import { State as StoreTransferState } from '../module-store-transfer/services/redux';

export enum AppReducerType {
  STORE_TRANSFER = 'store-transfer',
}

export enum ReduxStateType {
  INIT = 'init',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
  CANCELLED = 'cancelled',
  SUCCESS = 'success',
}

export interface ReduxData<T> {
  data: T;
  status: ReduxStateType;
  error?: Error;
}

export type AppReduxState = {
  storeTransfer: StoreTransferState;
};
