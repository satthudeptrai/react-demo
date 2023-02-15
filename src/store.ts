import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "./view/HomePage/sliceToolKit"
import pokemonDetailReducer from "./view/PokemonDetail/sliceToolKit"
import myBagReducer from './components/MyBag/sliceToolKit'
const rootReducer = {
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  myBag: myBagReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store