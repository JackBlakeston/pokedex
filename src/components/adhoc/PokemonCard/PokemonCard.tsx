import classes from './PokemonCard.module.scss';

import { PokemonImage } from 'components/adhoc';
import { TypesDisplay } from 'components/adhoc';

import { IPokemon } from 'interfaces';

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
