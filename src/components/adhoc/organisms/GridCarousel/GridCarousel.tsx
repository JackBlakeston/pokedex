import { memo } from 'react';

import classes from './GridCarousel.module.scss';

import { GridSlide } from '../../../../components/adhoc';
import { Button } from '../../../../components/generic';

import useCarousel from '../../../../hooks/useCarousel';

import { COLOR_PRIMARY } from '../../../../constants/colors';

import { DIRECTIONS, GRID_PAGES, SIZES } from '../../../../enums';

const PokemonGridSlideMemoized = memo(GridSlide);

const GridCarousel = () => {
  const {
    gridSlidesClassNames,
    gridSlidesIdLists,
    handleNextPageButtonClick,
    handlePreviousPageButtonClick,
  } = useCarousel(classes);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <PokemonGridSlideMemoized
          idList={gridSlidesIdLists.gridSlideA}
          classNames={gridSlidesClassNames.gridSlideA}
          containerId={GRID_PAGES.A}
        />
        <PokemonGridSlideMemoized
          idList={gridSlidesIdLists.gridSlideB}
          classNames={gridSlidesClassNames.gridSlideB}
          containerId={GRID_PAGES.B}
        />
        <PokemonGridSlideMemoized
          idList={gridSlidesIdLists.gridSlideC}
          classNames={gridSlidesClassNames.gridSlideC}
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
