import classes from './PokemonCard.module.scss';

import { PokemonImage } from 'components/adhoc';
import { TypesDisplay } from 'components/adhoc';

import usePokemon from 'hooks/usePokemon';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemonId: number;
  onClick: (pokemon: IPokemon) => void;
}

const PokemonCard = ({ pokemonId, onClick }: IProps) => {
  const pokemon = usePokemon(pokemonId);

  const handleClick = () => {
    if (pokemon) {
      onClick(pokemon);
    }
  };

  const renderPokemonCard = () => {
    if (pokemon) {
      return (
        <div className={classes.mainContainer} onClick={handleClick}>
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
