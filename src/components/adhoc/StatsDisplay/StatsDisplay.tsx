import classes from './StatsDisplay.module.scss';

import { StatBarWidget } from 'components/adhoc';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
}

const StatsDisplay = ({ pokemon }: IProps) => {
  const renderStatBarWidgets = () => {
    return pokemon.stats.map((stat, index) => {
      return <StatBarWidget statName={stat.name} value={stat.value} color={pokemon.color} key={index} />;
    });
  };

  return <div className={classes.mainContainer}>{renderStatBarWidgets()}</div>;
};

export default StatsDisplay;
