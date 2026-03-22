import React from 'react';
import styles from './Exercicio.module.css';

export default function Exercicio({children, dificuldade = "Médio", numero}) {

  const cores = {
    Fácil: "#4CAF50",
    Médio: "#FF9800",
    Difícil: "#F44336"
  };

  return (
    <div className={styles.box}>
      
      <div className={styles.header}>
        <span className={styles.titulo}>
          🧩 Exercício {numero}
        </span>

        <span 
          className={styles.badge}
          style={{backgroundColor: cores[dificuldade]}}
        >
          {dificuldade}
        </span>
      </div>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  );
}