import classes from './PokemonDetails.module.scss';

import TypeWidget from 'components/TypeWidget/TypeWidget';
import PokemonImage from 'components/PokemonImage/PokemonImage';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
  const renderTypes = () => {
    return (
      <div className={classes.typesContainer}>
        <TypeWidget type={pokemon.types[0]} />
        {pokemon.types[1] && <TypeWidget type={pokemon.types[1]} />}
      </div>
    );
  };

  return (
    <div className={classes.mainContainer}>
      <PokemonImage pokemon={pokemon} size='large' />
      <div>#{pokemon.id}</div>
      <div className={classes.name}>{pokemon.name}</div>
      {renderTypes()}
    </div>
  );
};

export default PokemonCard;
