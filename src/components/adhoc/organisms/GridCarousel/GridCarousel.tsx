import { memo } from 'react';

import classes from './GridCarousel.module.scss';

import { GridPage } from '../../../../components/adhoc';
import { Button } from '../../../../components/generic';

import useCarousel from '../../../../hooks/useCarousel';

import { COLOR_PRIMARY } from '../../../../constants/colors';

import { DIRECTIONS, GRID_PAGES, SIZES } from '../../../../enums';

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
          containerId={GRID_PAGES.A}
        />
        <PokemonGridPageMemoized
          idList={gridPagesIdLists.gridPageB}
          classNames={gridPagesClassNames.gridPageB}
          containerId={GRID_PAGES.B}
        />
        <PokemonGridPageMemoized
          idList={gridPagesIdLists.gridPageC}
          classNames={gridPagesClassNames.gridPageC}
          containerId={GRID_PAGES.C}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={handlePreviousPageButtonClick}
          text={DIRECTIONS.PREVIOUS}
          color={COLOR_PRIMARY}
          size={SIZES.MEDIUM}
          className={classes.button}
        />
        <Button
          onClick={handleNextPageButtonClick}
          text={DIRECTIONS.NEXT}
          color={COLOR_PRIMARY}
          size={SIZES.MEDIUM}
          className={classes.button}
        />
      </div>
    </div>
  );
};

export default GridCarousel;
