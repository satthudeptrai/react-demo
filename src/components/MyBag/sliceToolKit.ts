import { createSlice } from "@reduxjs/toolkit";
import { MyPokemon } from "src/models/pokemon.model";

const initList:MyPokemon[] = [];
const myBag = createSlice({
  name: 'pokemonDetail',
  initialState: {
    listMyPokemon: initList
  },
  reducers: {
    catchPokemon: (state, action:any) => {
      state.listMyPokemon.push(action.payload);
    },
    renamePokemon: (state, action) => {
      state.listMyPokemon[action.payload.index].nickName = action.payload.nick;
    },
    releasePokemon: (state, action) => {
      state.listMyPokemon.splice(action.payload, 1);
    },
  }
})

const { reducer, actions } = myBag;
export const { catchPokemon, releasePokemon, renamePokemon } = actions;
export default reducer;