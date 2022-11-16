import classes from './AttributesCard.module.scss';

interface IProps {
  height: number;
  weight: number;
  ability: string;
}

const AttributesCard = ({ height, weight, ability }: IProps) => {
  const heightMeters = height / 10;
  const weightKilograms = weight / 10;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Height</div>
        <span className={classes.attributeValue}>{heightMeters}</span> m
      </div>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Weight</div>
        <span className={classes.attributeValue}>{weightKilograms}</span> kg
      </div>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Ability</div>
        {ability}
      </div>
    </div>
  );
};

export default AttributesCard;
