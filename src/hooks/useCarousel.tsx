import { useCallback, useEffect, useState } from 'react';

import useCarouselIdPages from './useCarouselIdPages';

import { SLIDE_ANIMATION_TIME } from '../constants/values';
import { SPACE } from '../constants/strings';

import { IClassNames, IPageClassNames, IPageIdLists } from '../interfaces';
import { DIRECTIONS, GRID_PAGES } from '../enums';

const useCarousel = (classes: IClassNames) => {
  const { current, next, prev, goToNextPage, goToPrevPage } = useCarouselIdPages();

  const [gridPagesClassNames, setGridPagesClassNames] = useState<IPageClassNames>({
    gridPageA: classes.currentPage,
    gridPageB: classes.nextPage,
    gridPageC: classes.previousPage,
  });

  const [gridPagesIdLists, setGridPagesIdLists] = useState<IPageIdLists>({
    gridPageA: current,
    gridPageB: next,
    gridPageC: prev,
  });

  useEffect(() => {
    const currentGridPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentGridPageId === GRID_PAGES.A) {
      setGridPagesIdLists({
        gridPageA: current,
        gridPageB: next,
        gridPageC: prev,
      });
    }
    if (currentGridPageId === GRID_PAGES.B) {
      setGridPagesIdLists({
        gridPageA: prev,
        gridPageB: current,
        gridPageC: next,
      });
    }
    if (currentGridPageId === GRID_PAGES.C) {
      setGridPagesIdLists({
        gridPageA: next,
        gridPageB: prev,
        gridPageC: current,
      });
    }
  }, [current, next, prev]);

  const handleNextPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageA),
      DIRECTIONS.NEXT,
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageB),
      DIRECTIONS.NEXT,
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageC),
      DIRECTIONS.NEXT,
    );
    setGridPagesClassNames({
      gridPageA: pageCClassNamesAux,
      gridPageB: pageAClassNamesAux,
      gridPageC: pageBClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToNextPage();
  };

  const handlePreviousPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageA),
      DIRECTIONS.PREVIOUS,
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageB),
      DIRECTIONS.PREVIOUS,
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageC),
      DIRECTIONS.PREVIOUS,
    );
    setGridPagesClassNames({
      gridPageA: pageBClassNamesAux,
      gridPageB: pageCClassNamesAux,
      gridPageC: pageAClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToPrevPage();
  };

  const disableButtonsDuringAnimation = useCallback(() => {
    const buttons = document.getElementsByClassName(classes.button);
    Array.from(buttons).forEach((buttonElement) => {
      buttonElement.classList.add(classes.disabledButton);
    });
    setTimeout(() => {
      Array.from(buttons).forEach((buttonElement) => {
        buttonElement.classList.remove(classes.disabledButton);
      });
    }, SLIDE_ANIMATION_TIME);
  }, []);

  const addHiddenClassWhereNecessary = useCallback(
    (className: string, direction: DIRECTIONS.PREVIOUS | DIRECTIONS.NEXT) => {
      if (direction === DIRECTIONS.NEXT && className === classes.nextPage) {
        return `${className} ${classes.hidden}`;
      }
      if (direction === DIRECTIONS.PREVIOUS && className === classes.previousPage) {
        return `${className} ${classes.hidden}`;
      }
      return className;
    },
    [],
  );

  const removeHiddenClass = useCallback((className: string) => {
    return className.split(SPACE)[0];
  }, []);

  return {
    gridPagesClassNames,
    gridPagesIdLists,
    handleNextPageButtonClick,
    handlePreviousPageButtonClick,
  };
};

export default useCarousel;
