// components/NotFound.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops! Page Not Found</h1>
      <p className={styles.description}>The page you're looking for does not exist.</p>
      <Link href="https://www.kodago.com/">
        <a className={styles.link}>Go back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
