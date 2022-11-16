import classes from './PokemonDetailsModal.module.scss';

import { Modal } from 'components/generic';
import { TypesDisplay, PokemonImage, AttributesCard, StatsDisplay } from 'components/adhoc';

import { IPokemon } from 'interfaces';

interface IProps {
  pokemon: IPokemon;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PokemonCard = ({ pokemon, isOpen, setIsOpen }: IProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={classes.mainContainer}>
        <PokemonImage color={pokemon.color} imgUrl={pokemon.imgUrl} size='large' />
        <div className={classes.displaysContainer}>
          <div>#{pokemon.id}</div>
          <div className={classes.name}>{pokemon.name}</div>
          <div className={classes.displayColumnsContainer}>
            <div className={classes.displayColumnLeft}>
              <AttributesCard pokemon={pokemon} />
              <TypesDisplay types={pokemon.types} />
            </div>
            <StatsDisplay pokemon={pokemon} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PokemonCard;
