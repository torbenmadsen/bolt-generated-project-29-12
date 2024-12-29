import React from 'react';
    import styles from './Features.module.css';

    function Features() {
      return (
        <section className={styles.features} id="features">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featureList}>
              <div className={styles.feature}>
                <img src="https://placehold.co/100x100" alt="Feature 1" className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>Custom Training</h3>
                <p className={styles.featureDescription}>Tailored training programs to meet your specific business needs.</p>
              </div>
              <div className={styles.feature}>
                <img src="https://placehold.co/100x100" alt="Feature 2" className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>Expert Support</h3>
                <p className={styles.featureDescription}>Access to a team of AI experts to guide you through the process.</p>
              </div>
              <div className={styles.feature}>
                <img src="https://placehold.co/100x100" alt="Feature 3" className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>Scalable Solutions</h3>
                <p className={styles.featureDescription}>Solutions that grow with your business, from startups to enterprises.</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default Features;
