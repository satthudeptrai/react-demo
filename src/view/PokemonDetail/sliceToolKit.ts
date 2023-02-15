import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {PokemonDetail} from "../../models/pokemon.model";

const initPokemon:PokemonDetail = {
  id: 0,
  name: '',
  img: '',
  height: 0,
  weight: 0,
  types: [],
  abilities: [],
  moves: [],
  hp: 0,
  attack: 0,
  defense: 0,
  sAttack: 0,
  sDefense: 0,
  speed: 0,
}

export const getPokemonDetailApi:any = createAsyncThunk('getPokemonDetail',async (id) => {
  try {
    const res = await axios({
      method: 'get',
      url: `pokemon/${id}`
    })
    return {
      id: res.data.id,
      name: res.data.name,
      img: res.data.sprites.other.home.front_default || res.data.sprites.front_default || require("../../assets/img/who.png"),
      height: res.data.height,
      weight: res.data.weight,
      types: res.data.types.map((i:any) => i.type?.name),
      abilities: res.data.abilities.map((i:any) => i.ability?.name),
      moves: res.data.moves.map((i:any) => i.move?.name),
      hp: res.data.stats[0].base_stat,
      attack: res.data.stats[1].base_stat,
      defense: res.data.stats[2].base_stat,
      sAttack: res.data.stats[3].base_stat,
      sDefense: res.data.stats[4].base_stat,
      speed: res.data.stats[5].base_stat,
    };
  } catch (error) {
    console.log(error);
    return false;
  }
})
const pokemonDetail = createSlice({
  name: 'pokemonDetail',
  initialState: {
    loading: false,
    pokemon: {...initPokemon}
  },
  reducers: {
    resetPokemon: (state) => {
      state.pokemon = {...initPokemon};
    }
  },
  extraReducers: {
    [getPokemonDetailApi.pending]: (state) => {
      state.loading = true
    },
    [getPokemonDetailApi.fulfilled]: (state, action) => {
     state.loading = false;
      state.pokemon = action.payload
    },
    [getPokemonDetailApi.rejected]: (state) => {
        state.loading = false;
    }
  }
})

const { reducer, actions } = pokemonDetail;
export const { resetPokemon } = actions;
export default reducer;