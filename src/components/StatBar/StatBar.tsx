import classes from './StatBar.module.scss';
import { IStat } from 'interfaces';

interface IProps {
  stat: IStat;
  color: string;
}
const StatBar = ({ stat, color }: IProps) => {
  const width = `${stat.value}%`;
  return (
    <div className={classes.mainContainer}>
      <span>{stat.name}</span>
      <span>{stat.value}</span>
      <div className={classes.percentageBarContainer}>
        <div className={classes.percentageBar} style={{ width, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default StatBar;
