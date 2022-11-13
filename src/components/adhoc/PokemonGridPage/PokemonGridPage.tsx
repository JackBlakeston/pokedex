import classes from './PokemonGridPage.module.scss';

import PokemonCard from '../PokemonCard/PokemonCard';

interface IProps {
  idList: number[];
}

const PokemonGridPage = ({ idList }: IProps) => {
  const renderGridItems = () => {
    return idList.map((id) => {
      return <PokemonCard pokemonId={id} key={id} />;
    });
  };
  return <div className={classes.mainContainer}>{renderGridItems()}</div>;
};

export default PokemonGridPage;
