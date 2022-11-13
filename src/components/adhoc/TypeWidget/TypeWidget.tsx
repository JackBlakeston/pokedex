import classes from './TypeWidget.module.scss';

import { POKEMON_TYPES, TYPE_COLORS } from 'enums';

interface IProps {
  type: POKEMON_TYPES;
}

const TypeWidget = ({ type }: IProps) => {
  const TypeWidgetStyles = {
    backgroundColor: TYPE_COLORS[type],
  };

  return (
    <div className={classes.mainContainer} style={TypeWidgetStyles}>
      {type}
    </div>
  );
};

export default TypeWidget;
