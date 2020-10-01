import './assets/styles/main.css';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { MultiImageBox } from './MultiImageBox';

import wine1 from './assets/images/wine-1.jpg';
import wine2 from './assets/images/wine-2.jpg';
import wine3 from './assets/images/wine-3.jpg';
import wine4 from './assets/images/wine-4.jpg';

const images = [wine1, wine2, wine3, wine4];

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid classes={{ root: classes.root }} container alignItems="center" justify="center">
      <MultiImageBox loading={false} imageType="main" images={images} />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(4),
  },
}));
