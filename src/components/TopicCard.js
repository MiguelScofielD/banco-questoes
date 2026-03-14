import React from 'react';
import Link from '@docusaurus/Link';
import styles from './TopicCard.module.css';

export default function TopicCard({title, description, to}) {
  return (
    <Link to={to} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}