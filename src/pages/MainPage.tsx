import classes from './MainPage.module.scss';

import { GridCarousel } from 'components/adhoc';

const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <GridCarousel />
    </div>
  );
};

export default MainPage;
