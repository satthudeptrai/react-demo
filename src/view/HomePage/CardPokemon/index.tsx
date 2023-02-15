import './styles.scss';
const CardPokemon = (props:any) => {
  return (
    <div className='card'>
      <div className="card-header">
        #{props.pokemon.id} {props.pokemon.name}
      </div>
      <div className={`card-img type-${props.pokemon.types[0]}`}>
        <img src={props.pokemon.img} />
      </div>
    </div>
  );
};

export default CardPokemon;
