import { IPokemon } from 'interfaces';
import classes from './InfoDisplay.module.scss';

interface IProps {
  pokemon: IPokemon;
}

const InfoDisplay = ({ pokemon }: IProps) => {
  const heightMeters = pokemon.height / 10;
  const weightKilograms = pokemon.weight / 10;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.infoLine}>
        <div className={classes.infoLabel}>Height</div>
        {heightMeters} m
      </div>
      <div className={classes.infoLine}>
        <div className={classes.infoLabel}>Weight</div>
        {weightKilograms} kg
      </div>
      <div className={classes.infoLine}>
        <div className={classes.infoLabel}>Ability</div>
        {pokemon.abilities[0]}
      </div>
    </div>
  );
};

export default InfoDisplay;
