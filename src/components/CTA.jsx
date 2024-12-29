import React from 'react';
    import styles from './CTA.module.css';

    function CTA() {
      return (
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaDescription}>Contact us today to learn how ChatGPT training can benefit your organization.</p>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </section>
      );
    }

    export default CTA;
