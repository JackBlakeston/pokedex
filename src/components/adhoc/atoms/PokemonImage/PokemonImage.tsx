import classes from './PokemonImage.module.scss';

import { ReactComponent as PokeballBackground } from '../../../../assets/icons/pokeball.svg';
import { SIZES } from '../../../../enums';

type SIZES_NO_MEDIUM = Exclude<SIZES, SIZES.MEDIUM>;

interface IProps {
  imgUrl: string;
  color: string;
  size: SIZES_NO_MEDIUM;
}

const PokemonImage = ({ imgUrl, color, size }: IProps) => {
  const isSmall = size === SIZES.SMALL;

  const coloredBackgroundStyle = {
    backgroundColor: color,
  };
  const pokeballBackgroundStyle = {
    fill: color,
  };

  const pokemonImgClasses = `${classes.pokemonImg} ${isSmall ? '' : classes.large}`;
  const pokeballBackgroundClasses = `${classes.pokeballBackground} ${isSmall ? '' : classes.large}`;
  const coloredBackgroundClasses = `${classes.coloredBackground} ${isSmall ? '' : classes.large}`;

  return (
    <div className={classes.mainContainer}>
      <img src={imgUrl} className={pokemonImgClasses} />
      <PokeballBackground style={pokeballBackgroundStyle} className={pokeballBackgroundClasses} />
      <div
        className={coloredBackgroundClasses}
        style={coloredBackgroundStyle}
        data-testid='ColoredBackground'
      />
    </div>
  );
};

export default PokemonImage;
