import classes from './PokemonGridPage.module.scss';

import PokemonCard from '../PokemonCard/PokemonCard';

interface IProps {
  idList: number[];
  classNames?: string;
  id?: string;
}

const PokemonGridPage = ({ idList, classNames, id }: IProps) => {
  const mainContainerClasses = `${classes.mainContainer} ${classNames}`;

  const renderGridItems = () => {
    return idList.map((pokemonId) => {
      return <PokemonCard pokemonId={pokemonId} key={pokemonId} />;
    });
  };
  return (
    <div className={mainContainerClasses} id={id}>
      {renderGridItems()}
    </div>
  );
};

export default PokemonGridPage;
