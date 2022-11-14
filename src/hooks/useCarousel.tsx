import { useCallback, useEffect, useState } from 'react';
import useCarouselIdPages from './useCarouselIdPages';

interface IClasses {
  readonly [key: string]: string;
}

interface IPageClassNames {
  pageA: string;
  pageB: string;
  pageC: string;
}

interface IPageIdLists {
  pageA: number[];
  pageB: number[];
  pageC: number[];
}

const SLIDE_ANIMATION_TIME = 1000;

const useCarousel = (classes: IClasses) => {
  const { current, next, prev, goToNextPage, goToPrevPage } = useCarouselIdPages();

  const [pageClassNames, setPageClassNames] = useState<IPageClassNames>({
    pageA: classes.currentPage,
    pageB: `${classes.nextPage}`,
    pageC: classes.previousPage,
  });

  const [pageIdLists, setPageIdLists] = useState<IPageIdLists>({
    pageA: current,
    pageB: next,
    pageC: prev,
  });

  useEffect(() => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentPageId === 'pageA') {
      setPageIdLists({
        pageA: current,
        pageB: next,
        pageC: prev,
      });
    }
    if (currentPageId === 'pageB') {
      setPageIdLists({
        pageA: prev,
        pageB: current,
        pageC: next,
      });
    }
    if (currentPageId === 'pageC') {
      setPageIdLists({
        pageA: next,
        pageB: prev,
        pageC: current,
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

  const removeHiddenClass = useCallback((className: string) => {
    return className.split(' ')[0];
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
    const pageAClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageA), 'next');
    const pageBClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageB), 'next');
    const pageCClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageC), 'next');
    setPageClassNames({
      pageA: pageCClassNamesAux,
      pageB: pageAClassNamesAux,
      pageC: pageBClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToNextPage();
  };

  const handlePreviousPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageA), 'previous');
    const pageBClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageB), 'previous');
    const pageCClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageClassNames.pageC), 'previous');
    setPageClassNames({
      pageA: pageBClassNamesAux,
      pageB: pageCClassNamesAux,
      pageC: pageAClassNamesAux,
    });
    disableButtonsDuringAnimation();
    goToPrevPage();
  };

  return { pageClassNames, pageIdLists, handleNextPageButtonClick, handlePreviousPageButtonClick };
};

export default useCarousel;
