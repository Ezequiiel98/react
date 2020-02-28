import React from 'react';

function Indicador({ grande, styles }) {
  return <span className={grande ? styles.grande : styles.chico} />;
}

export default Indicador;
