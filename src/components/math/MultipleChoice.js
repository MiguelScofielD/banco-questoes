import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import styles from './MultipleChoice.module.css';

function renderOption(text) {
  const parts = text.split(/(\$[^$]+\$)/g);

  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);

      return <InlineMath key={index} math={math} />;
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function MultipleChoice({ options, correct }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {options.map((opt, i) => {
        let className = styles.option;

        if (selected !== null) {
          if (i === correct) {
            className += ' ' + styles.correct;
          } else if (i === selected) {
            className += ' ' + styles.wrong;
          }
        }

        return (
          <div
            key={i}
            className={className}
            onClick={() => setSelected(i)}
          >
            {renderOption(opt)}
          </div>
        );
      })}
    </div>
  );
}