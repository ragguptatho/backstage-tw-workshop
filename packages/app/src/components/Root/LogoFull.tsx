import React from 'react';

import Logo from './Logo.png';

const styles = {width: '150px',backgroundColor:'white',borderRadius: '20px'}

const LogoFull = () => {

  return (
    <img src={Logo} style={styles}></img>
  );
};

export default LogoFull;
