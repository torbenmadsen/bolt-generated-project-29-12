import React from 'react';
    import styles from './Footer.module.css';

    function Footer() {
      return (
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; {new Date().getFullYear()} ChatGPT Training. All rights reserved.</p>
          </div>
        </footer>
      );
    }

    export default Footer;
