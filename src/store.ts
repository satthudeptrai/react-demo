import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "./view/HomePage/sliceToolKit"
const rootReducer = {
  pokemon: pokemonReducer,
}

const store = configureStore({
  reducer: rootReducer
})

export default store