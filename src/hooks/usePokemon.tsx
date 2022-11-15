import { useEffect, useState } from 'react';

import { IPokemon } from 'interfaces';
import { getPokemonById } from 'services/pokeapiService';

const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  useEffect(() => {
    (async () => {
      const pokemonAux = await getPokemonById(id);
      setPokemon(pokemonAux);
    })();
  }, []);

  return pokemon;
};

export default usePokemon;
