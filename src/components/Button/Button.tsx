import { CSSProperties } from 'react';

import classes from './Button.module.scss';

interface IProps {
  onClick: () => void;
  text: string;
  color: string;
  size: 'small' | 'medium' | 'large';
}

const Button = ({ onClick, text, color, size }: IProps) => {
  const buttonStyles = {
    '--buttonColor': color,
  } as CSSProperties;

  const buttonClasses = `${classes.mainContainer} ${classes[size]}`;

  return (
    <div onClick={onClick} className={buttonClasses} style={buttonStyles}>
      {text}
    </div>
  );
};

export default Button;
