import { memo } from 'react';

import classes from './GridCarousel.module.scss';

import { GridPage } from '../../../../components/adhoc';
import { Button } from '../../../../components/generic';

import useCarousel from '../../../../hooks/useCarousel';

import { SIZES } from '../../../../enums';

const PokemonGridPageMemoized = memo(GridPage);

const GridCarousel = () => {
  const { gridPagesClassNames, gridPagesIdLists, handleNextPageButtonClick, handlePreviousPageButtonClick } =
    useCarousel(classes);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <PokemonGridPageMemoized
          idList={gridPagesIdLists.gridPageA}
          classNames={gridPagesClassNames.gridPageA}
          containerId='gridPageA'
        />
        <PokemonGridPageMemoized
          idList={gridPagesIdLists.gridPageB}
          classNames={gridPagesClassNames.gridPageB}
          containerId='gridPageB'
        />
        <PokemonGridPageMemoized
          idList={gridPagesIdLists.gridPageC}
          classNames={gridPagesClassNames.gridPageC}
          containerId='gridPageC'
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
