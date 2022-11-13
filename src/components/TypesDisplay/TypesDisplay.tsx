import classes from './TypesDisplay.module.scss';

import TypeWidget from 'components/TypeWidget/TypeWidget';

import { POKEMON_TYPES } from 'enums';

interface IProps {
  types: POKEMON_TYPES[];
}

const TypesDisplay = ({ types }: IProps) => {
  return (
    <div className={classes.mainContainer}>
      <TypeWidget type={types[0]} />
      {types[1] && <TypeWidget type={types[1]} />}
    </div>
  );
};

export default TypesDisplay;
