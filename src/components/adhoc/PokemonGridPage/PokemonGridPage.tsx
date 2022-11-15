import { useCallback, useState } from 'react';

import classes from './PokemonGridPage.module.scss';

import { PokemonDetailsModal } from 'components/adhoc';
import { PokemonCard } from 'components/adhoc';

import { IPokemon } from 'interfaces';

interface IProps {
  idList: number[];
  classNames?: string;
  containerId?: string;
}

const PokemonGridPage = ({ idList, classNames, containerId }: IProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainContainerClasses = `${classes.mainContainer} ${classNames}`;

  const handleCardClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const renderGridItems = useCallback(() => {
    return idList.map((pokemonId) => {
      return <PokemonCard pokemonId={pokemonId} key={pokemonId} onClick={handleCardClick} />;
    });
  }, [idList]);

  const renderModal = useCallback(() => {
    if (selectedPokemon) {
      return <PokemonDetailsModal pokemon={selectedPokemon} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />;
    }
  }, [selectedPokemon, isModalOpen]);
  return (
    <>
      <div className={mainContainerClasses} id={containerId}>
        {renderGridItems()}
      </div>
      {renderModal()}
    </>
  );
};

export default PokemonGridPage;
