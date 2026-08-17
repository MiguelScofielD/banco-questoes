import React, { useState } from 'react';
import styles from './Solucao.module.css';

export default function Solucao({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>

      <button
        className={styles.button}
        onClick={() => setShow(!show)}
      >
        {show ? "Ocultar solução" : "Mostrar solução"}
      </button>

      <div
        className={`${styles.content} ${!show ? styles.hidden : ''}`}
      >
        {children}
      </div>

    </div>
  );
}