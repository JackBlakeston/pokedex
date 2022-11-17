import { memo } from 'react';

import classes from './GridCarousel.module.scss';

import { GridPage } from '../../../../components/adhoc';
import { Button } from '../../../../components/generic';

import useCarousel from '../../../../hooks/useCarousel';

import { SIZES } from '../../../../enums';

const PokemonGridPageMemoized = memo(GridPage);

const GridCarousel = () => {
  const { pageClassNames, pageIdLists, handleNextPageButtonClick, handlePreviousPageButtonClick } =
    useCarousel(classes);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <PokemonGridPageMemoized
          idList={pageIdLists.pageA}
          classNames={pageClassNames.pageA}
          containerId='pageA'
        />
        <PokemonGridPageMemoized
          idList={pageIdLists.pageB}
          classNames={pageClassNames.pageB}
          containerId='pageB'
        />
        <PokemonGridPageMemoized
          idList={pageIdLists.pageC}
          classNames={pageClassNames.pageC}
          containerId='pageC'
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={handlePreviousPageButtonClick}
          text='Previous'
          color='#F29C5E'
          size={SIZES.MEDIUM}
          className={classes.button}
        />
        <Button
          onClick={handleNextPageButtonClick}
          text='Next'
          color='#F29C5E'
          size={SIZES.MEDIUM}
          className={classes.button}
        />
      </div>
    </div>
  );
};

export default GridCarousel;
