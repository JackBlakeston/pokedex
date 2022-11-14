import classes from './MainPage.module.scss';

import { PokemonGridPage } from 'components/adhoc';

import usePokemonIdPages from 'hooks/usePokemonIdPages';
import { useEffect, useState } from 'react';
import { Button } from 'components/generic';

const MainPage = () => {
  const { currentPage, nextPage, previousPage, goToNextPage, goToPreviousPage } = usePokemonIdPages();

  const [pageAClassNames, setPageAClassNames] = useState(classes.currentPage);
  const [pageBClassNames, setPageBClassNames] = useState(classes.nextPage);
  const [pageCClassNames, setPageCClassNames] = useState(classes.previousPage);
  const [pageAIdList, setPageAIdList] = useState(currentPage);
  const [pageBIdList, setPageBIdList] = useState(nextPage);
  const [pageCIdList, setPageCIdList] = useState(previousPage);

  useEffect(() => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;
    console.log('useeff', currentPageId);
    if (currentPageId === 'pageA') {
      setPageAIdList(currentPage);
      setPageBIdList(nextPage);
      setPageCIdList(previousPage);
    }
    if (currentPageId === 'pageB') {
      setPageAIdList(previousPage);
      setPageBIdList(currentPage);
      setPageCIdList(nextPage);
    }
    if (currentPageId === 'pageC') {
      setPageAIdList(nextPage);
      setPageBIdList(previousPage);
      setPageCIdList(currentPage);
    }
  }, [currentPage, nextPage, previousPage]);

  const handleNextPageButtonClick = () => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;

    if (currentPageId === 'pageA') {
      setPageAClassNames(classes.previousPage);
      setPageBClassNames(classes.currentPage);
      setPageCClassNames(`${classes.nextPage} ${classes.hidden}`);
    }
    if (currentPageId === 'pageB') {
      console.log('handler', currentPageId);
      setPageAClassNames(`${classes.nextPage} ${classes.hidden}`);
      setPageBClassNames(classes.previousPage);
      setPageCClassNames(classes.currentPage);
    }
    if (currentPageId === 'pageC') {
      setPageAClassNames(classes.currentPage);
      setPageBClassNames(`${classes.nextPage} ${classes.hidden}`);
      setPageCClassNames(classes.previousPage);
    }
    goToNextPage();
  };

  const handlePreviousPageButtonClick = () => {
    const currentPageId = document.getElementsByClassName(classes.currentPage)[0].id;

    if (currentPageId === 'pageA') {
      setPageAClassNames(classes.nextPage);
      setPageBClassNames(`${classes.previousPage} ${classes.hidden}`);
      setPageCClassNames(classes.currentPage);
    }
    if (currentPageId === 'pageB') {
      console.log('handler', currentPageId);
      setPageAClassNames(classes.currentPage);
      setPageBClassNames(classes.nextPage);
      setPageCClassNames(`${classes.previousPage} ${classes.hidden}`);
    }
    if (currentPageId === 'pageC') {
      setPageAClassNames(`${classes.previousPage} ${classes.hidden}`);
      setPageBClassNames(classes.currentPage);
      setPageCClassNames(classes.nextPage);
    }
    goToPreviousPage();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridBackground} />
      <PokemonGridPage idList={pageAIdList} classNames={pageAClassNames} id='pageA' />
      <PokemonGridPage idList={pageBIdList} classNames={pageBClassNames} id='pageB' />
      <PokemonGridPage idList={pageCIdList} classNames={pageCClassNames} id='pageC' />
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
