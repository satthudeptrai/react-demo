import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListApi:any = createAsyncThunk('getList',async (page:number) => {
  let listPokemon = [];
  let pageMax = 1;
  try {
    if(page){
      const res:any = await axios({
        method: 'get',
        url: 'pokemon',
        params: {
          offset: (page - 1) * 20,
          limit: 20
        }
      })
      pageMax = Math.ceil(res.data.count / 20);
      listPokemon = res.data.results.map((item:any) => item.name);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    pageMax: pageMax,
    data: listPokemon
  }
})

const pokemon = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pageMax: 1,
    loading: true,
    list: []
  },
  reducers: {
    setPageRedux: (state, action) => {
      state.page = Number(action.payload);
    }
  },
  extraReducers: {
    [getListApi.pending]: (state) => {
      state.loading = true;
    },
    [getListApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.pageMax = action.payload.pageMax;
      state.list = action.payload.data;
    },
    [getListApi.rejected]: (state) => {
      state.loading = false;
    }
  }
})

const { reducer, actions } = pokemon;
export const { setPageRedux } = actions;
export default reducer;