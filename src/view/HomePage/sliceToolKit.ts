import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListApi:any = createAsyncThunk('getList',async (page:number) => {
  const listApi = [];
  let arrayData:any = [];
  for(let i = (page-1)*20+1; i <= page*20; i++) {
    listApi.push(axios({
      method: 'get',
      url: `pokemon/${i}`
    }))
  }
  await Promise.all(listApi).then(res => {
    arrayData = res.map(item => item.data);
  });
  return arrayData
})
const pokemon = createSlice({
  name: 'pokemon',
  initialState: {
    page: 1,
    loading: false,
    list: []
  },
  reducers: {
    prePageRedux: (state) => {
      state.page--;
    },
    nextPageRedux: (state) => {
      state.page++;
    }
  },
  extraReducers: {
    [getListApi.pending]: (state, action) => {
      state.loading = true
    },
    [getListApi.fulfilled]: (state, action) => {
     state.loading = false;
      state.list = action.payload
    },
    [getListApi.rejected]: (state, action) => {
        state.loading = false;
    }
  }
})

const { reducer, actions } = pokemon;
export const { prePageRedux, nextPageRedux } = actions;
export default reducer;