import classes from './PokemonCard.module.scss';

import { PokemonImage, TypesDisplay } from '../../../../components/adhoc';

import usePokemon from '../../../../hooks/usePokemon';

import { IPokemon } from '../../../../interfaces';

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
        <div className={classes.mainContainer} onClick={handleClick} data-testid='Card'>
          <PokemonImage color={pokemon.color} imgUrl={pokemon.imgUrl} size='small' />
          <div className={classes.displaysContainer}>
            <div className={classes.pokemonId}>#{pokemon.id}</div>
            <div className={classes.pokemonName}>{pokemon.name}</div>
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
