import PokemonGrid from 'components/PokemonGrid/PokemonGrid';
import usePokemon from 'hooks/usePokemon';
import usePokemonPages from 'hooks/usePokemonPages';

const MainPage = () => {
  const currentPage = usePokemonPages();
  const pokemon = usePokemon(6);

  console.log(currentPage);
  console.log(pokemon);

  return (
    <>
      <PokemonGrid />
    </>
  );
};

export default MainPage;
