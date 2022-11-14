import { memo, useCallback, useEffect, useState } from 'react';

import classes from './MainPage.module.scss';

import { PokemonGridPage } from 'components/adhoc';
import { Button } from 'components/generic';

import usePokemonIdPages from 'hooks/usePokemonIdPages';

const SLIDE_ANIMATION_TIME = 1000;

const PokemonGridPageMemoized = memo(PokemonGridPage);

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

const MainPage = () => {
  const {
    current: currentPage,
    next: nextPage,
    prev: previousPage,
    goToNextPage,
    goToPreviousPage,
  } = usePokemonIdPages();

  const [pageClassNames, setPageClassNames] = useState<IPageClassNames>({
    pageA: classes.currentPage,
    pageB: `${classes.nextPage}`,
    pageC: classes.previousPage,
  });

  const [pageIdLists, setPageIdLists] = useState<IPageIdLists>({
    pageA: currentPage,
    pageB: nextPage,
    pageC: previousPage,
  });

  useEffect(() => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentPageId === 'pageA') {
      setPageIdLists({
        pageA: currentPage,
        pageB: nextPage,
        pageC: previousPage,
      });
    }
    if (currentPageId === 'pageB') {
      setPageIdLists({
        pageA: previousPage,
        pageB: currentPage,
        pageC: nextPage,
      });
    }
    if (currentPageId === 'pageC') {
      setPageIdLists({
        pageA: nextPage,
        pageB: previousPage,
        pageC: currentPage,
      });
    }
  }, [currentPage, nextPage, previousPage]);

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
    goToPreviousPage();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <PokemonGridPageMemoized idList={pageIdLists.pageA} classNames={pageClassNames.pageA} containerId='pageA' />
        <PokemonGridPageMemoized idList={pageIdLists.pageB} classNames={pageClassNames.pageB} containerId='pageB' />
        <PokemonGridPageMemoized idList={pageIdLists.pageC} classNames={pageClassNames.pageC} containerId='pageC' />
      </div>
      <Button
        onClick={handlePreviousPageButtonClick}
        text='Previous'
        color='red'
        size='medium'
        className={classes.button}
      />
      <Button onClick={handleNextPageButtonClick} text='Next' color='red' size='medium' className={classes.button} />
    </div>
  );
};

export default MainPage;
