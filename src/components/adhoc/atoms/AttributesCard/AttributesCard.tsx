import classes from './AttributesCard.module.scss';

interface IProps {
  height: number;
  weight: number;
  ability: string;
}

const AttributesCard = ({ height, weight, ability }: IProps) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Height</div>
        <span className={classes.attributeValue}>{height}</span> m
      </div>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Weight</div>
        <span className={classes.attributeValue}>{weight}</span> kg
      </div>
      <div className={classes.attributeLine}>
        <div className={classes.attributeLabel}>Ability</div>
        {ability}
      </div>
    </div>
  );
};

export default AttributesCard;
