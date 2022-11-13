import classes from './PokemonCard.module.scss';

import { PokemonImage } from 'components/adhoc';
import { TypesDisplay } from 'components/adhoc';

import usePokemon from 'hooks/usePokemon';

interface IProps {
  pokemonId: number;
}

const PokemonCard = ({ pokemonId }: IProps) => {
  const pokemon = usePokemon(pokemonId);

  const renderPokemonCard = () => {
    if (pokemon) {
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
    }
    return null;
  };

  return renderPokemonCard();
};

export default PokemonCard;
