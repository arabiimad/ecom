import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Welcome to ShowcasePro</h1>
        <p className={styles.heroSubtitle}>
          Discover innovation, quality, and solutions tailored for you.
        </p>
        <Link to="/products" className={styles.ctaButton}>
          Explore Our Products
        </Link>
      </header>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Cutting-Edge Technology</h3>
            <p>We leverage the latest tech to deliver superior products.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Customer-Centric Approach</h3>
            <p>Your satisfaction is our top priority. We're here to help.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Sustainable Practices</h3>
            <p>Committed to a greener future with eco-friendly solutions.</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <blockquote className={styles.testimonial}>
          <p>"ShowcasePro transformed our business. Their products are top-notch!"</p>
          <footer>- A Happy Client</footer>
        </blockquote>
      </section>
    </div>
  );
};

export default HomePage;
