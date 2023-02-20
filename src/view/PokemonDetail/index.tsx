import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPokemonDetailApi, resetPokemon } from './sliceToolKit';
import { catchPokemon } from '../../components/MyBag/sliceToolKit';
import Loading from '../../components/Loading';
import MyBag from '../../components/MyBag';
import './styles.scss';

const pokemonDetail = () => {
  const params = useParams ();
  const navigate = useNavigate();
  const loading = useSelector((state:any) => state.pokemonDetail.loading);
  const pokemon = useSelector((state:any) => state.pokemonDetail.pokemon);
  const [showPopup, setShowPopup] = useState(false);
  const [showCatch, setShowCatch] = useState(false);
  const [nick, setNick] = useState("");
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
  const catchPoke = async () => {
    setShowCatch(true);
    setTimeout(() => {
      setShowCatch(false);
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        setShowPopup(true);
        setNick(pokemon.name);
      } else {
        const dom = document.getElementsByTagName("body")[0]
        const child = document.createElement("div")
        child.innerHTML = '<div class="notification">You catch pokemon fail!!!</div>'
        dom.appendChild(child);
        setTimeout(() => {
          child.remove()
        }, 2000)
      }
    }, 2310)
  }
  const setNickname = () => {
    const formatPoke:any = {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.img,
      nickName: nick,
      types: pokemon.types
    }
    const action = catchPokemon(formatPoke);
    dispatch(action);
    setNick("")
    setShowPopup(false);
  }
  return (
    <div className={`pokemon-detail type-${pokemon.types[0]}`}>
      <MyBag />
      {loading && <div>
        <Loading />
      </div>}
      {showCatch && <div className="popup-confirm">
        <img src={require("../../assets/img/poke-throw.gif")} alt="" />
      </div>}
      {showPopup && (
        <div className="popup-confirm">
          <div className="popup-confirm__container">
            <div className="title">
              What is nickname your Pokemon?
            </div>
            <input type="text" value={nick} maxLength={30} onChange={(e) => {setNick(e.target.value)}} />
            <div className="btn-group">
              <button className="btn" onClick={setNickname}>Save</button>
            </div>
          </div>
        </div>
      )}
      <img src={require("../../assets/img/arrowback.jpg")} className='btn-back' onClick={returnPage} />
      <div>
        <div className='header'>
          {pokemon.name}
        </div>
        <div className='container'>
          <div className="card-img">
            <img src={pokemon.img || require("../../assets/img/who.png")} className="pokemon-img" />
            <img src={require("../../assets/img/pokeball.png")} className="catch-btn" onClick={() => catchPoke()} />
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
