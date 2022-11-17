import classes from './PokemonImage.module.scss';

import { ReactComponent as PokeballBackground } from '../../../../assets/icons/pokeball.svg';

interface IProps {
  imgUrl: string;
  color: string;
  size: 'small' | 'large';
}

const PokemonImage = ({ imgUrl, color, size }: IProps) => {
  const coloredBackgroundStyle = {
    backgroundColor: color,
  };
  const pokeballBackgroundStyle = {
    fill: color,
  };

  const pokemonImgClasses = `${classes.pokemonImg} ${size === 'small' ? '' : classes.large}`;
  const pokeballBackgroundClasses = `${classes.pokeballBackground} ${size === 'small' ? '' : classes.large}`;
  const coloredBackgroundClasses = `${classes.coloredBackground} ${size === 'small' ? '' : classes.large}`;

  return (
    <div className={classes.mainContainer}>
      <img src={imgUrl} className={pokemonImgClasses} />
      <PokeballBackground style={pokeballBackgroundStyle} className={pokeballBackgroundClasses} />
      <div className={coloredBackgroundClasses} style={coloredBackgroundStyle} />
    </div>
  );
};

export default PokemonImage;
