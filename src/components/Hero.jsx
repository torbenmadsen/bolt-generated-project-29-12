import React from 'react';
    import styles from './Hero.module.css';

    function Hero() {
      return (
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>Unlock the Power of ChatGPT</h1>
              <p className={styles.subtitle}>Transform your business with cutting-edge AI training and solutions.</p>
              <button className={styles.ctaButton}>Get Started</button>
            </div>
            <div className={styles.image}>
              <img src="https://placehold.co/600x400" alt="ChatGPT Training" />
            </div>
          </div>
        </section>
      );
    }

    export default Hero;
