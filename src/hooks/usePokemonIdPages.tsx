import { useState, useTransition } from 'react';

const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 905;
const PAGE_SIZE = 10;

interface IPages {
  current: number[];
  next: number[];
  prev: number[];
}

const usePokemonIdPages = () => {
  const { initialCurrentPage, initialNextPage } = getInitialPages();
  const [pages, setPages] = useState<IPages>({
    current: initialCurrentPage,
    next: initialNextPage,
    prev: [],
  });
  const [, startTransition] = useTransition();

  const goToNextPage = () => {
    if (pages.next?.length > 0) {
      startTransition(() => {
        setPages({
          current: pages.next,
          next: getNewNextPage(pages.next),
          prev: pages.current,
        });
      });
    }
  };

  const goToPreviousPage = () => {
    if (pages.prev?.length > 0) {
      startTransition(() => {
        setPages({
          current: pages.prev,
          next: pages.current,
          prev: getNewPreviousPage(pages.prev),
        });
      });
    }
  };

  return { ...pages, goToNextPage, goToPreviousPage };
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
