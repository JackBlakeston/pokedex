import classes from './PokemonGridPage.module.scss';

import PokemonCard from '../PokemonCard/PokemonCard';
import { useCallback } from 'react';

interface IProps {
  idList: number[];
  classNames?: string;
  containerId?: string;
}

const PokemonGridPage = ({ idList, classNames, containerId }: IProps) => {
  const mainContainerClasses = `${classes.mainContainer} ${classNames}`;

  const renderGridItems = useCallback(() => {
    return idList.map((pokemonId) => {
      return <PokemonCard pokemonId={pokemonId} key={pokemonId} />;
    });
  }, [idList]);
  return (
    <div className={mainContainerClasses} id={containerId}>
      {renderGridItems()}
    </div>
  );
};

export default PokemonGridPage;
