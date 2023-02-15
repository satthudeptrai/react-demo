export interface PokemonDetail {
  id: number,
  name: string,
  img: string,
  height: number,
  weight: number,
  types: string[],
  abilities: string[],
  moves: string[],
  hp: number,
  attack: number,
  defense: number,
  sAttack: number,
  sDefense: number,
  speed: number,
}

export interface MyPokemon {
  id: number,
  name: string,
  img: string,
  nickName: string
}