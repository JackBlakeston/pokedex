import classes from './StatBar.module.scss';

import { POKEMON_STATS } from 'enums';

interface IProps {
  statName: POKEMON_STATS;
  value: number;
  color: string;
}
const StatBar = ({ statName, value, color }: IProps) => {
  const width = `${value / 1.5}%`;
  return (
    <div className={classes.mainContainer}>
      <span>{statName}</span>
      <span>{value}</span>
      <div className={classes.percentageBarContainer}>
        <div className={classes.percentageBar} style={{ width, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default StatBar;
