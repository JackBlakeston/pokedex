import { useState, useTransition } from 'react';

const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 905;
const PAGE_SIZE = 10;
const FIRST_PAGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SEMI_FINAL_PAGE = [891, 892, 893, 894, 895, 896, 897, 898, 899, 900];
const FINAL_PAGE = [901, 902, 903, 904, 905];

interface ICarouselPages {
  current: number[];
  next: number[];
  prev: number[];
}

const useCarouselIdPages = () => {
  const { initialCurrentPage, initialNextPage } = getInitialPages();
  const [pages, setPages] = useState<ICarouselPages>({
    current: initialCurrentPage,
    next: initialNextPage,
    prev: FINAL_PAGE,
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

  const goToPrevPage = () => {
    if (pages.prev?.length > 0) {
      startTransition(() => {
        setPages({
          current: pages.prev,
          next: pages.current,
          prev: getNewPrevPage(pages.prev),
        });
      });
    }
  };

  return { ...pages, goToNextPage, goToPrevPage };
};

const getInitialPages = () => {
  const initialCurrentPage = Array(PAGE_SIZE);
  const initialNextPage = Array(PAGE_SIZE);
  const initialPrevPage = Array(PAGE_SIZE);

  for (let i = 1; i <= PAGE_SIZE; i++) {
    const arrayIndex = i - FIRST_POKEMON_ID;
    const currentPagePokemonId = i;
    const nextPagePokemonId = i + PAGE_SIZE;

    initialCurrentPage[arrayIndex] = currentPagePokemonId;
    initialNextPage[arrayIndex] = nextPagePokemonId;
  }
  return { initialCurrentPage, initialNextPage, initialPrevPage };
};

const getNewPrevPage = (oldPreviousPage: number[]) => {
  if (oldPreviousPage[0] === FIRST_POKEMON_ID) {
    return FINAL_PAGE;
  }
  if (oldPreviousPage[4] === LAST_POKEMON_ID) {
    return SEMI_FINAL_PAGE;
  }
  const newPreviousPage = oldPreviousPage.map((id) => id - PAGE_SIZE);
  return newPreviousPage;
};

const getNewNextPage = (oldNextPage: number[]) => {
  if (oldNextPage[4] === LAST_POKEMON_ID) {
    return FIRST_PAGE;
  }
  const newNextPage = oldNextPage.map((id) => id + PAGE_SIZE);

  if (newNextPage[4] === LAST_POKEMON_ID) {
    return FINAL_PAGE;
  }
  return newNextPage;
};

export default useCarouselIdPages;
