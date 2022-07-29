import React from 'react';
import { makeStyles } from '@material-ui/core';

import Icon from './Icon.png';

const useStyles = makeStyles({
  logo:{width: '32px',borderRadius: '19px',height:'30px'}
});


const LogoIcon = () => {
  const classes = useStyles();

  return (
    <img src={Icon} className={classes.logo}></img>
  );
};

export default LogoIcon;
