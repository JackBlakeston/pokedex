import classes from './StatDisplay.module.scss';

import StatBar from 'components/StatBar/StatBar';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
}

const StatDisplay = ({ pokemon }: IProps) => {
  const renderStatBars = () => {
    return pokemon.stats.map((stat, index) => {
      return <StatBar statName={stat.name} value={stat.value} color={pokemon.color} key={index} />;
    });
  };

  return <div className={classes.mainContainer}>{renderStatBars()}</div>;
};

export default StatDisplay;
