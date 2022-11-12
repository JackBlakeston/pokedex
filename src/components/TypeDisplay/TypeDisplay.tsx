import classes from './TypeDisplay.module.scss';

import { POKEMON_TYPES, TYPE_COLORS } from 'enums';

interface IProps {
  type: POKEMON_TYPES;
}

const TypeDisplay = ({ type }: IProps) => {
  const typeDisplayStyles = {
    backgroundColor: TYPE_COLORS[type],
  };

  return (
    <div className={classes.mainContainer} style={typeDisplayStyles}>
      {type}
    </div>
  );
};

export default TypeDisplay;
