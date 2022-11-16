import classes from './TypesDisplay.module.scss';

import { TypeBadge } from 'components/adhoc';

import { POKEMON_TYPES } from 'enums';

interface IProps {
  types: POKEMON_TYPES[];
}

const TypesDisplay = ({ types }: IProps) => {
  return (
    <div className={classes.mainContainer}>
      <TypeBadge type={types[0]} />
      {types[1] && <TypeBadge type={types[1]} />}
    </div>
  );
};

export default TypesDisplay;
