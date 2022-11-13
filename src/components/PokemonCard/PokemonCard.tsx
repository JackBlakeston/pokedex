import classes from './PokemonCard.module.scss';

import TypeDisplay from 'components/TypeDisplay/TypeDisplay';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
  const coloredBackgroundStyle = {
    backgroundColor: pokemon.color,
  };

  const renderTypes = () => {
    return (
      <div className={classes.typesContainer}>
        <TypeDisplay type={pokemon.types[0]} />
        {pokemon.types[1] && <TypeDisplay type={pokemon.types[1]} />}
      </div>
    );
  };

  return (
    <div className={classes.mainContainer}>
      <img src={pokemon.imgUrl} className={classes.pokemonImg} />
      <div className={classes.coloredBackground} style={coloredBackgroundStyle} />
      <div className={classes.displaysContainer}>
        <div>#{pokemon.id}</div>
        <div className={classes.name}>{pokemon.name}</div>
        {renderTypes()}
      </div>
    </div>
  );
};

export default PokemonCard;
