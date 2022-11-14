import { memo, useEffect, useState, useTransition } from 'react';

import classes from './MainPage.module.scss';

import { PokemonGridPage } from 'components/adhoc';
import { Button } from 'components/generic';

import usePokemonIdPages from 'hooks/usePokemonIdPages';

const SLIDE_ANIMATION_TIME = 2000;

const PokemonGridPageMemoized = memo(PokemonGridPage);

const MainPage = () => {
  const { currentPage, nextPage, previousPage, goToNextPage, goToPreviousPage } = usePokemonIdPages();

  const [, startTransition] = useTransition();

  const [pageAClassNames, setPageAClassNames] = useState(classes.currentPage);
  const [pageBClassNames, setPageBClassNames] = useState(`${classes.nextPage}`);
  const [pageCClassNames, setPageCClassNames] = useState(classes.previousPage);
  const [pageAIdList, setPageAIdList] = useState(currentPage);
  const [pageBIdList, setPageBIdList] = useState(nextPage);
  const [pageCIdList, setPageCIdList] = useState(previousPage);

  useEffect(() => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    if (currentPageId === 'pageA') {
      startTransition(() => {
        setPageAIdList(currentPage);
        setPageBIdList(nextPage);
        setPageCIdList(previousPage);
      });
    }
    if (currentPageId === 'pageB') {
      startTransition(() => {
        setPageAIdList(previousPage);
        setPageBIdList(currentPage);
        setPageCIdList(nextPage);
      });
    }
    if (currentPageId === 'pageC') {
      startTransition(() => {
        setPageAIdList(nextPage);
        setPageBIdList(previousPage);
        setPageCIdList(currentPage);
      });
    }
  }, [currentPage, nextPage, previousPage]);

  const disableButtonsDuringAnimation = () => {
    const buttons = document.getElementsByClassName(classes.button);
    Array.from(buttons).forEach((buttonElement) => {
      buttonElement.classList.add(classes.disabledButton);
    });
    setTimeout(() => {
      Array.from(buttons).forEach((buttonElement) => {
        buttonElement.classList.remove(classes.disabledButton);
      });
    }, SLIDE_ANIMATION_TIME);
  };

  const removeHiddenClass = (className: string) => {
    return className.split(' ')[0];
  };

  const addHiddenClassWhereNecessary = (className: string, direction: 'previous' | 'next') => {
    if (direction === 'next' && className === classes.nextPage) {
      return `${className} ${classes.hidden}`;
    }
    if (direction === 'previous' && className === classes.previousPage) {
      return `${className} ${classes.hidden}`;
    }
    return className;
  };

  const handleNextPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageAClassNames), 'next');
    const pageBClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageBClassNames), 'next');
    const pageCClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageCClassNames), 'next');
    setPageAClassNames(pageCClassNamesAux);
    setPageBClassNames(pageAClassNamesAux);
    setPageCClassNames(pageBClassNamesAux);
    disableButtonsDuringAnimation();
    setTimeout(() => {
      document.getElementsByClassName(classes.nextPage)[0].classList.remove(classes.hidden);
    }, SLIDE_ANIMATION_TIME);
    goToNextPage();
  };

  const handlePreviousPageButtonClick = () => {
    const pageAClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageAClassNames), 'previous');
    const pageBClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageBClassNames), 'previous');
    const pageCClassNamesAux = addHiddenClassWhereNecessary(removeHiddenClass(pageCClassNames), 'previous');
    setPageAClassNames(pageBClassNamesAux);
    setPageBClassNames(pageCClassNamesAux);
    setPageCClassNames(pageAClassNamesAux);
    disableButtonsDuringAnimation();
    goToPreviousPage();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <PokemonGridPageMemoized idList={pageAIdList} classNames={pageAClassNames} id='pageA' />
        <PokemonGridPageMemoized idList={pageBIdList} classNames={pageBClassNames} id='pageB' />
        <PokemonGridPageMemoized idList={pageCIdList} classNames={pageCClassNames} id='pageC' />
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
