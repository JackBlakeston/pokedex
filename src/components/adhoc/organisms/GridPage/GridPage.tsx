import { memo, useCallback, useState } from 'react';

import classes from './GridPage.module.scss';

import { PokemonDetailsModal } from 'components/adhoc';
import { PokemonCard } from 'components/adhoc';

import { IPokemon } from 'interfaces';

const PokemonCardMemoized = memo(PokemonCard);
const PokemonDetailsModalMemoized = memo(PokemonDetailsModal);

interface IProps {
  idList: number[];
  classNames?: string;
  containerId?: string;
}

const GridPage = ({ idList, classNames, containerId }: IProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainContainerClasses = `${classes.mainContainer} ${classNames}`;

  const handleCardClick = useCallback((pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  }, []);

  const renderGridItems = useCallback(() => {
    return idList.map((pokemonId) => {
      return <PokemonCardMemoized pokemonId={pokemonId} key={pokemonId} onClick={handleCardClick} />;
    });
  }, [idList]);

  const renderModal = useCallback(() => {
    if (selectedPokemon) {
      return (
        <PokemonDetailsModalMemoized
          pokemon={selectedPokemon}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      );
    }
  }, [selectedPokemon, isModalOpen]);
  return (
    <>
      <div className={mainContainerClasses} id={containerId} data-testid='Grid'>
        {renderGridItems()}
      </div>
      {renderModal()}
    </>
  );
};

export default GridPage;
