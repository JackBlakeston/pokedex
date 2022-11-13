import classes from './PokemonCard.module.scss';

import PokemonImage from 'components/PokemonImage/PokemonImage';

import { IPokemon } from 'interfaces';
import TypesDisplay from 'components/TypesDisplay/TypesDisplay';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
  return (
    <div className={classes.mainContainer}>
      <PokemonImage pokemon={pokemon} size='small' />
      <div className={classes.displaysContainer}>
        <div>#{pokemon.id}</div>
        <div className={classes.name}>{pokemon.name}</div>
        <TypesDisplay types={pokemon.types} />
      </div>
    </div>
  );
};

export default PokemonCard;
