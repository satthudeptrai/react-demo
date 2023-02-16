import './styles.scss';
const CardPokemon = (props:any) => {
  return (
    <div className={`card type-${props.pokemon.types[0]}`}>
      <div className="card-header">
        <div className="id-number">
          #{props.pokemon.id}
        </div>
        <div className="type">
          <div className="text">
            {props.pokemon.types[0]}
          </div>
        </div>
      </div>
      <div className="card-img">
        <img src={props.pokemon.img} />
      </div>
      <div className="name">
        {props.pokemon.name}
      </div>
    </div>
  );
};

export default CardPokemon;
