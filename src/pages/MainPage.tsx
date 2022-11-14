import { memo } from 'react';

import classes from './MainPage.module.scss';

import { PokemonGridPage } from 'components/adhoc';
import { Button } from 'components/generic';

import useCarousel from 'hooks/useCarousel';

const PokemonGridPageMemoized = memo(PokemonGridPage);

const MainPage = () => {
  const { pageClassNames, pageIdLists, handleNextPageButtonClick, handlePreviousPageButtonClick } =
    useCarousel(classes);

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
