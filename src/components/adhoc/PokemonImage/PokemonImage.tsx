import classes from './PokemonImage.module.scss';

import { ReactComponent as PokeballBackground } from 'assets/icons/pokeball.svg';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
  size: 'small' | 'large';
}

const PokemonImage = ({ pokemon, size }: IProps) => {
  const coloredBackgroundStyle = {
    backgroundColor: pokemon.color,
  };
  const pokeballBackgroundStyle = {
    fill: pokemon.color,
  };

  const pokemonImgClasses = `${classes.pokemonImg} ${size === 'small' ? '' : classes.large}`;
  const pokeballBackgroundClasses = `${classes.pokeballBackground} ${size === 'small' ? '' : classes.large}`;
  const coloredBackgroundClasses = `${classes.coloredBackground} ${size === 'small' ? '' : classes.large}`;

  return (
    <div className={classes.mainContainer}>
      <img src={pokemon.imgUrl} className={pokemonImgClasses} />
      <PokeballBackground style={pokeballBackgroundStyle} className={pokeballBackgroundClasses} />
      <div className={coloredBackgroundClasses} style={coloredBackgroundStyle} />
    </div>
  );
};

export default PokemonImage;
