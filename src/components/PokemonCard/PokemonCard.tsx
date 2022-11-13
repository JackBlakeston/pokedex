import classes from './PokemonCard.module.scss';

import TypeDisplay from 'components/TypeDisplay/TypeDisplay';
import PokemonImage from 'components/PokemonImage/PokemonImage';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
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
      <PokemonImage pokemon={pokemon} size='small' />
      <div className={classes.displaysContainer}>
        <div>#{pokemon.id}</div>
        <div className={classes.name}>{pokemon.name}</div>
        {renderTypes()}
      </div>
    </div>
  );
};

export default PokemonCard;
