import React, { useState } from 'react';
import styles from './Solucao.module.css';

export default function Solucao({children}) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>

      <button 
        className={styles.button}
        onClick={() => setShow(!show)}
      >
        {show ? "Ocultar solução" : "Mostrar solução"}
      </button>

      {show && (
        <div className={styles.content}>
          {children}
        </div>
      )}

    </div>
  );
}