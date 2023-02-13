import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from '../../redux/types';

import { RootState } from '../../redux/store';
import { PaginableData } from '../types';
import { stat } from 'fs';

export interface State {
  fileUpload?: File;
}

const initialState: ReduxData<State> = {
  data: {
    fileUpload: undefined,
  },
  status: ReduxStateType.INIT,
};

const storeTransferSlice = createSlice({
  name: 'storeTransferSlice',
  initialState,
  reducers: {
    uploadFile: (state, action: PayloadAction<boolean>) => {
      state.data.fileUpload = undefined;
    },
  },
});

export const { uploadFile } = storeTransferSlice.actions;

export default storeTransferSlice.reducer;
