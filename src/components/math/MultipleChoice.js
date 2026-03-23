import React, { useState } from 'react';
import styles from './MultipleChoice.module.css';

export default function MultipleChoice({ options, correct }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {options.map((opt, i) => {
        let className = styles.option;

        if (selected !== null) {
          if (i === correct) className += ' ' + styles.correct;
          else if (i === selected) className += ' ' + styles.wrong;
        }

        return (
          <div
            key={i}
            className={className}
            onClick={() => setSelected(i)}
          >
            {opt}
          </div>
        );
      })}
    </div>
  );
}