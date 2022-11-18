import classes from './StatsDisplay.module.scss';

import { StatBar } from '../../../../components/adhoc';

import { IPokemon } from '../../../../interfaces';

interface IProps {
  pokemon: IPokemon;
}

const StatsDisplay = ({ pokemon }: IProps) => {
  const renderStatBars = () => {
    return pokemon.stats.map((stat, index) => {
      return <StatBar name={stat.name} value={stat.value} color={pokemon.color} key={index} />;
    });
  };

  return <div className={classes.mainContainer}>{renderStatBars()}</div>;
};

export default StatsDisplay;
