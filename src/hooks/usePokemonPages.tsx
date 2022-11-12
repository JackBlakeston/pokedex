import { useEffect, useState } from 'react';

import { IPokemon } from 'interfaces';
import { getPaginatedPokemonUrls } from 'services/pokeapiService';

const usePokemonPages = () => {
  const [currentPage, setCurrentPage] = useState<IPokemon[]>();

  useEffect(() => {
    (async () => {
      const currentPageAux = await getPaginatedPokemonUrls(0, 20);
      setCurrentPage(currentPageAux);
    })();
  }, []);

  return currentPage;
};

export default usePokemonPages;
