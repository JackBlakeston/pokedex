import classes from './TypesDisplay.module.scss';

import { TypeBadge } from '../../../../components/adhoc';

import { POKEMON_TYPES } from '../../../../enums';

interface IProps {
  types: POKEMON_TYPES[];
}

const TypesDisplay = ({ types }: IProps) => {
  const renderTypeBadges = () => {
    if (types[1]) {
      return (
        <>
          <TypeBadge type={types[0]} />
          <TypeBadge type={types[1]} />
        </>
      );
    } else {
      return <TypeBadge type={types[0]} />;
    }
  };

  return <div className={classes.mainContainer}>{renderTypeBadges()}</div>;
};

export default TypesDisplay;
