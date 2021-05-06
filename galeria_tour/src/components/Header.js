import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: '#fff',
  },
  appbarTitle: {
    flexGrow: '1',
    height: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + './assets/logo.png'})`,
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    marginRight: '50%',
    color: '#ddd',
    fontSize: '2rem',
  },
  goDown: {
    color: '#fff',
    fontSize: '4rem',
  },
  logo: {
    height: '100px',
    width: '100px',
    marginRight: '80%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '50%',
    },
  },
}));
export default function Header() {
  const classes = useStyles();
  const [check, setCheck] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setCheck(true);
  }, []);
  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          {/* <div className={classes.appbarTitle} /> */}
          <img
            className={classes.logo}
            src='./assets/logo.png'
            alt={'Medellin Galeria Tour'}
          />
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <SortIcon className={classes.icon} />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Tours</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Collapse
        in={check}
        {...(check ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span>Medellín Galeria Tour</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
