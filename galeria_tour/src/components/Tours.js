import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
/* import useWindowPosition from '../hook/useWindowPosition'; */

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
}));
export default function Tours() {
  const classes = useStyles();
  /* const checked = useWindowPosition('header'); */
  return (
    <div className={classes.root}>
      <ImageCard />
      <ImageCard />
    </div>
  );
}
