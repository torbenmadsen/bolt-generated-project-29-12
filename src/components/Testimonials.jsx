import React from 'react';
    import styles from './Testimonials.module.css';

    function Testimonials() {
      return (
        <section className={styles.testimonials} id="testimonials">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialList}>
              <div className={styles.testimonial}>
                <p className={styles.quote}>"ChatGPT training has revolutionized our customer service. We've seen a 40% increase in efficiency."</p>
                <p className={styles.author}>- Jane Doe, CEO of Example Corp</p>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.quote}>"The AI solutions provided are top-notch. Our team is now more productive than ever."</p>
                <p className={styles.author}>- John Smith, CTO of Tech Solutions</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default Testimonials;
