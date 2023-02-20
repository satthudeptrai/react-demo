import axios from 'axios';
import { useEffect, useState } from 'react';
import { COLOR } from '../../../helpers/constants';
import './styles.scss';
const initPokemonData = {
  id: 0,
  name: "",
  img: "",
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

const CardPokemon = (props:any) => {
  const [pokemon, setPokemon] = useState({...initPokemonData});
  useEffect(() => {
    getPokemonDetail();
  },[]);
  const getPokemonDetail = async () => {
    const res = await axios({
      method: 'get',
      url: `pokemon/${props.pokemon}`
    });
    setPokemon({
      id: res.data.id,
      name: res.data.name,
      img: res.data.sprites.other.home.front_default || res.data.sprites.front_default || require("../../../assets/img/who.png"),
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
    });
  }
  return (
    <div
      className={`card type-${pokemon.types[0]}`}
      style={{backgroundImage: `linear-gradient(180deg, ${COLOR[pokemon.types[0]]}, ${pokemon.types[1] ? COLOR[pokemon.types[1]] : COLOR[pokemon.types[0]]})`}}
    >
      <div className="card-header">
        <div className="id-number">
          #{pokemon.id}
        </div>
        <div className="type">
          <div className="text">
            {pokemon.types[0]}
          </div>
        </div>
      </div>
      <div className="card-img">
        <img src={pokemon.img} />
      </div>
      <div className="name">
        {pokemon.name}
      </div>
    </div>
  );
};

export default CardPokemon;
