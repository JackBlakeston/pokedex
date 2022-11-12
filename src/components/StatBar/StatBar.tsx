import classes from './StatBar.module.scss';

import { POKEMON_STATS } from 'enums';

interface IProps {
  stat: POKEMON_STATS;
  value: number;
  color: string;
}
const StatBar = ({ stat, value, color }: IProps) => {
  const width = `${value}%`;
  return (
    <div className={classes.mainContainer}>
      <span>{stat}</span>
      <span>{value}</span>
      <div className={classes.percentageBarContainer}>
        <div className={classes.percentageBar} style={{ width, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default StatBar;
