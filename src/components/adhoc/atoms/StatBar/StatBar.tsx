import classes from './StatBar.module.scss';

import { STAT_BAR_FACTOR } from '../../../../constants/values';

import { POKEMON_STATS } from '../../../../enums';

interface IProps {
  name: POKEMON_STATS;
  value: number;
  color: string;
}

const StatBar = ({ name, value, color }: IProps) => {
  const width = `${value / STAT_BAR_FACTOR}%`;

  return (
    <div className={classes.mainContainer}>
      <span>{name}</span>
      <span>{value}</span>
      <div className={classes.percentageBarContainer}>
        <div
          className={classes.percentageBar}
          style={{ width, backgroundColor: color }}
          data-testid='PercentageBar'
        ></div>
      </div>
    </div>
  );
};

export default StatBar;
