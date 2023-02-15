import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPokemonDetailApi, resetPokemon } from './sliceToolKit';
import { catchPokemon } from '../../components/MyBag/sliceToolKit';
import Loading from '../../components/Loading';
import './styles.scss'
import { MyPokemon } from 'src/models/pokemon.model';
import MyBag from '../../components/MyBag';

const pokemonDetail = () => {
  const params = useParams ();
  const navigate = useNavigate();
  const loading = useSelector((state:any) => state.pokemonDetail.loading);
  const pokemon = useSelector((state:any) => state.pokemonDetail.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getPokemonDetailApi(params.id);
    dispatch(action);
  },[params])
  const returnPage = () => {
    const action = resetPokemon();
    dispatch(action);
    navigate(-1);
  }
  const catchPoke = (pokemon:any) => {
    const formatPoke:any = {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.img,
      nickName: pokemon.name
    }
    const action = catchPokemon(formatPoke);
    dispatch(action);
  }
  const renderTypePokemon = () => {
    return pokemon.types.map((item:string) => {
      return(
        <div className={`type-item type-${item}`} key={item}>
          {item}
        </div>
      )
    })
  }
  const renderAbilitiePokemon = () => {
    return pokemon.abilities.join(', ')
  }
  const renderMovePokemon = () => {
    return pokemon.moves.map((item:string) => {
      return(
        <div className="move-item" key={item}>
          {item}
        </div>
      )
    })
  }
  return (
    <div className={`pokemon-detail type-${pokemon.types[0]}`}>
      <MyBag />
      {loading && <div>
        <Loading />
      </div>}
      <img src={require("../../assets/img/arrowback.jpg")} className='btn-back' onClick={returnPage} />
      <div>
        <div className='header'>
          {pokemon.name}
        </div>
        <div className='container'>
          <div className="card-img">
            <img src={pokemon.img} className="pokemon-img" />
            <img src={require("../../assets/img/pokeball.png")} className="catch-btn" onClick={() => catchPoke(pokemon)} />
          </div>
          <div className="info">
            <div className="type">
              <div className="title">
                Types:
              </div>
              {renderTypePokemon()}
            </div>
            <div className="abilitie">
              <div className="title">
                Abilities:
              </div>
              <div className="abilitie-item">
                {renderAbilitiePokemon()}
              </div>
            </div>
            <div className="move">
              <div className="title">
                Moves:  
              </div> {renderMovePokemon()}
            </div>
            <div className="info__group-bmi">
              <div className="bmi">
                <span className="title-bmi">Weight:</span> {pokemon.weight}Kg
              </div>
              <div className="bmi">
                <span className="title-bmi">Height:</span> {pokemon.height}m
              </div>
            </div>
            <div className="info__group-stats">
              <div className="stats">
                <div className="title-stats">Hp: {pokemon.hp}</div>
                <div className="stat-bar hp" style={{width: `${pokemon.hp*3}px`}}></div>
              </div>
              <div className="stats">
                <div className="title-stats">Attack: {pokemon.attack}</div>
                <div className="stat-bar attack" style={{width: `${pokemon.attack*3}px`}}></div>
              </div>
              <div className="stats">
                <div className="title-stats">Defense: {pokemon.defense}</div>
                <div className="stat-bar defense" style={{width: `${pokemon.defense*3}px`}}></div>
              </div>
              <div className="stats">
                <div className="title-stats">Special-attack: {pokemon.sAttack}</div>
                <div className="stat-bar s-attack" style={{width: `${pokemon.sAttack*3}px`}}></div>
              </div>
              <div className="stats">
                <div className="title-stats">Special-defense: {pokemon.sDefense}</div>
                <div className="stat-bar s-defense" style={{width: `${pokemon.sDefense*3}px`}}></div>
              </div>
              <div className="stats">
                <div className="title-stats">Speed: {pokemon.speed}</div>
                <div className="stat-bar speed" style={{width: `${pokemon.speed*3}px`}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default pokemonDetail
