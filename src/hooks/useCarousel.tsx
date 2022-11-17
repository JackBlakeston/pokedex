import { useCallback, useEffect, useState } from 'react';

import useCarouselIdPages from './useCarouselIdPages';

import { SLIDE_ANIMATION_TIME } from '../constants/values';
import { SPACE } from '../constants/strings';

import { IClassNames, IPageClassNames, IPageIdLists } from '../interfaces';
import { DIRECTIONS, GRID_PAGES } from '../enums';

const useCarousel = (classes: IClassNames) => {
  const { current, next, prev, goToNextPage, goToPrevPage } = useCarouselIdPages();

  const [gridSlidesClassNames, setGridSlidesClassNames] = useState<IPageClassNames>({
    gridSlideA: classes.currentPage,
    gridSlideB: classes.nextPage,
    gridSlideC: classes.previousPage,
  });

  const [gridSlidesIdLists, setGridSlidesIdLists] = useState<IPageIdLists>({
    gridSlideA: current,
    gridSlideB: next,
    gridSlideC: prev,
  });

  useEffect(() => {
    const currentGridSlideId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentGridSlideId === GRID_PAGES.A) {
      setGridSlidesIdLists({
        gridSlideA: current,
        gridSlideB: next,
        gridSlideC: prev,
      });
    }
    if (currentGridSlideId === GRID_PAGES.B) {
      setGridSlidesIdLists({
        gridSlideA: prev,
        gridSlideB: current,
        gridSlideC: next,
      });
    }
    if (currentGridSlideId === GRID_PAGES.C) {
      setGridSlidesIdLists({
        gridSlideA: next,
        gridSlideB: prev,
        gridSlideC: current,
      });
    }
  }, [current, next, prev]);

  const handleNextPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideA),
      DIRECTIONS.NEXT,
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideB),
      DIRECTIONS.NEXT,
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideC),
      DIRECTIONS.NEXT,
    );
    setGridSlidesClassNames({
      gridSlideA: pageCClassNamesAux,
      gridSlideB: pageAClassNamesAux,
      gridSlideC: pageBClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToNextPage();
  };

  const handlePreviousPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideA),
      DIRECTIONS.PREVIOUS,
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideB),
      DIRECTIONS.PREVIOUS,
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridSlidesClassNames.gridSlideC),
      DIRECTIONS.PREVIOUS,
    );
    setGridSlidesClassNames({
      gridSlideA: pageBClassNamesAux,
      gridSlideB: pageCClassNamesAux,
      gridSlideC: pageAClassNamesAux,
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
    gridSlidesClassNames,
    gridSlidesIdLists,
    handleNextPageButtonClick,
    handlePreviousPageButtonClick,
  };
};

export default useCarousel;
