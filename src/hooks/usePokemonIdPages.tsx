import { useEffect, useState } from 'react';

const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 905;
const PAGE_SIZE = 10;

const usePokemonIdPages = () => {
  const { initialCurrentPage, initialNextPage } = getInitialPages();
  const [currentPage, setCurrentPage] = useState<number[]>(initialCurrentPage);
  const [nextPage, setNextPage] = useState<number[]>(initialNextPage);
  const [previousPage, setPreviousPage] = useState<number[]>([]);

  const goToNextPage = () => {
    if (nextPage?.length > 0) {
      setPreviousPage(currentPage);
      setCurrentPage(nextPage);
      setNextPage(getNewNextPage(nextPage));
    }
  };

  const goToPreviousPage = () => {
    if (previousPage?.length > 0) {
      setNextPage(currentPage);
      setCurrentPage(previousPage);
      setPreviousPage(getNewPreviousPage(previousPage));
    }
  };

  return { currentPage, nextPage, previousPage, goToNextPage, goToPreviousPage };
};

const getInitialPages = () => {
  const initialCurrentPage = Array(PAGE_SIZE);
  const initialNextPage = Array(PAGE_SIZE);

  for (let i = 1; i <= PAGE_SIZE; i++) {
    const arrayIndex = i - 1;
    const nextPagePokemonId = i + PAGE_SIZE;
    initialCurrentPage[arrayIndex] = i;
    initialNextPage[arrayIndex] = nextPagePokemonId;
  }

  return { initialCurrentPage, initialNextPage };
};

const getNewPreviousPage = (oldPreviousPage: number[]) => {
  if (oldPreviousPage[0] === FIRST_POKEMON_ID) {
    return [];
  }
  const newPreviousPage = oldPreviousPage.map((id) => id + PAGE_SIZE);
  return newPreviousPage;
};

const getNewNextPage = (oldNextPage: number[]) => {
  if (oldNextPage[4] === LAST_POKEMON_ID) {
    return [];
  }
  const newNextPage = oldNextPage.map((id) => id + PAGE_SIZE);

  if (newNextPage[4] === LAST_POKEMON_ID) {
    return newNextPage.slice(0, 5);
  }
  return newNextPage;
};

export default usePokemonIdPages;
