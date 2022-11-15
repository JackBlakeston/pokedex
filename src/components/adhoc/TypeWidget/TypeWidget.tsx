import classes from './TypeWidget.module.scss';

import { POKEMON_TYPES, TYPE_COLORS } from 'enums';

interface IProps {
  type: POKEMON_TYPES;
}

const TypeWidget = ({ type }: IProps) => {
  const typeWidgetStyles = {
    backgroundColor: TYPE_COLORS[type],
  };
  return (
    <div className={classes.mainContainer} style={typeWidgetStyles}>
      {type}
    </div>
  );
};

export default TypeWidget;
