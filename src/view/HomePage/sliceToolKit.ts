import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {PokemonDetail} from "../../models/pokemon.model";

export const getListApi:any = createAsyncThunk('getList',async (page:number) => {
  const listApi:any[] = [];
  let arrayData:PokemonDetail[] = [];
  let pageMax = 1;
  try {
    if(page){
      const listRes:any = await axios({
        method: 'get',
        url: 'pokemon',
        params: {
          offset: (page - 1) * 20,
          limit: 20
        }
      })
      pageMax = Math.ceil(listRes.data.count / 20);
      listRes.data.results.forEach((item:any) => {
        listApi.push(axios({
          method: 'get',
          url: `pokemon/${item.name}`
        }))
      });
      await Promise.all(listApi).then(res => {
        arrayData = res.map(item => {
          return {
            id: item.data.id,
            name: item.data.name,
            img: item.data.sprites.other.home.front_default || item.data.sprites.front_default || require('../../assets/img/who.png'),
            height: item.data.height,
            weight: item.data.weight,
            types: item.data.types.map((i:any) => i.type?.name),
            abilities: item.data.abilities.map((i:any) => i.ability?.name),
            moves: item.data.moves.map((i:any) => i.move?.name),
            hp: item.data.stats[0].base_stat,
            attack: item.data.stats[1].base_stat,
            defense: item.data.stats[2].base_stat,
            sAttack: item.data.stats[3].base_stat,
            sDefense: item.data.stats[4].base_stat,
            speed: item.data.stats[5].base_stat,
          }
        });
      });
    }
  } catch (error) {
    console.log(error)
  }
  return {
    pageMax: pageMax,
    data: arrayData
  }
})
const pokemon = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pageMax: 1,
    loading: false,
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