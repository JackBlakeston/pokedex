import { useState, useTransition } from 'react';

import {
  FINAL_PAGE,
  FIRST_PAGE,
  FIRST_POKEMON_ID,
  LAST_POKEMON_ID,
  PAGE_SIZE,
  SECOND_PAGE,
  SEMI_FINAL_PAGE,
} from '../constants/values';

import { ICarouselIdPages } from '../interfaces/carousel';

const useCarouselIdPages = () => {
  const [pages, setPages] = useState<ICarouselIdPages>({
    current: FIRST_PAGE,
    next: SECOND_PAGE,
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
