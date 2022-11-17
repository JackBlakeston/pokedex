import { useCallback, useEffect, useState } from 'react';

import useCarouselIdPages from './useCarouselIdPages';

import { SLIDE_ANIMATION_TIME } from '../constants/values';

import { IClassNames, IPageClassNames, IPageIdLists } from '../interfaces';

const useCarousel = (classes: IClassNames) => {
  const { current, next, prev, goToNextPage, goToPrevPage } = useCarouselIdPages();

  const [gridPagesClassNames, setGridPagesClassNames] = useState<IPageClassNames>({
    gridPageA: classes.currentPage,
    gridPageB: `${classes.nextPage}`,
    gridPageC: classes.previousPage,
  });

  const [gridPagesIdLists, setGridPagesIdLists] = useState<IPageIdLists>({
    gridPageA: current,
    gridPageB: next,
    gridPageC: prev,
  });

  useEffect(() => {
    const currentGridPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentGridPageId === 'gridPageA') {
      setGridPagesIdLists({
        gridPageA: current,
        gridPageB: next,
        gridPageC: prev,
      });
    }
    if (currentGridPageId === 'gridPageB') {
      setGridPagesIdLists({
        gridPageA: prev,
        gridPageB: current,
        gridPageC: next,
      });
    }
    if (currentGridPageId === 'gridPageC') {
      setGridPagesIdLists({
        gridPageA: next,
        gridPageB: prev,
        gridPageC: current,
      });
    }
  }, [current, next, prev]);

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

  const addHiddenClassWhereNecessary = useCallback((className: string, direction: 'previous' | 'next') => {
    if (direction === 'next' && className === classes.nextPage) {
      return `${className} ${classes.hidden}`;
    }
    if (direction === 'previous' && className === classes.previousPage) {
      return `${className} ${classes.hidden}`;
    }
    return className;
  }, []);

  const handleNextPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageA),
      'next',
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageB),
      'next',
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageC),
      'next',
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
      'previous',
    );
    const pageBClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageB),
      'previous',
    );
    const pageCClassNamesAux = addHiddenClassWhereNecessary(
      removeHiddenClass(gridPagesClassNames.gridPageC),
      'previous',
    );
    setGridPagesClassNames({
      gridPageA: pageBClassNamesAux,
      gridPageB: pageCClassNamesAux,
      gridPageC: pageAClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToPrevPage();
  };

  return {
    gridPagesClassNames,
    gridPagesIdLists,
    handleNextPageButtonClick,
    handlePreviousPageButtonClick,
  };
};

const removeHiddenClass = useCallback((className: string) => {
  return className.split(' ')[0];
}, []);

export default useCarousel;
