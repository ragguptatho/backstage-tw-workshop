import { makeStyles } from '@material-ui/core';
import React from 'react';

import Logo from './Logo.png';

const useStyles = makeStyles({
    logo:{width: '150px',backgroundColor:'white',borderRadius: '20px'}
});

const LogoFull = () => {  

  const classes = useStyles();

  return (
    <img src={Logo} className={classes.logo}></img>
  );
};

export default LogoFull;
