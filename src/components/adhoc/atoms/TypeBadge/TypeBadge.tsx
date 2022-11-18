import classes from './TypeBadge.module.scss';

import { POKEMON_TYPES, TYPE_COLORS } from '../../../../enums';

interface IProps {
  type: POKEMON_TYPES;
}

const TypeBadge = ({ type }: IProps) => {
  const typeBadgeStyles = {
    backgroundColor: TYPE_COLORS[type],
  };

  return (
    <div className={classes.mainContainer} style={typeBadgeStyles} data-testid='TypeBadge'>
      {type}
    </div>
  );
};

export default TypeBadge;
