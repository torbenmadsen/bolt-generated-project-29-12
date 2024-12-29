import React from 'react';
    import styles from './Header.module.css';

    function Header() {
      return (
        <header className={styles.header}>
          <div className={styles.container}>
            <a href="/" className={styles.logo}>ChatGPT Training</a>
            <nav>
              <ul className={styles.nav}>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact" className={styles.contactButton}>Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
