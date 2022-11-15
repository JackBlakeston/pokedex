import classes from './MainPage.module.scss';

import { GridCarousel } from 'components/adhoc';
import { ReactComponent as PokeballBackground } from 'assets/icons/pokeball2.svg';

const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>
        <span>pokemin</span> the minimalist pokedex
      </div>
      <GridCarousel />
      <PokeballBackground className={classes.pokeballBackground} />
    </div>
  );
};

export default MainPage;
