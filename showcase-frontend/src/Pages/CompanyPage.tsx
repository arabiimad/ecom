import React from 'react';
import styles from './CompanyPage.module.css';

const CompanyPage: React.FC = () => {
  return (
    <div className={styles.companyPage}>
      <header className={styles.pageHeader}>
        <h1>About Our Company</h1>
        <p>Dedicated to excellence and innovation in every endeavor.</p>
      </header>

      <section className={`${styles.companySection} ${styles.aboutUsSection}`}>
        <div className={styles.sectionContent}>
          <h2>Our Mission</h2>
          <p>
            To empower our customers by providing cutting-edge solutions and unparalleled service,
            driving growth and success in a rapidly evolving digital world. We strive to innovate
            continuously and operate with integrity.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be a global leader in our industry, recognized for our commitment to quality,
            sustainability, and customer satisfaction. We envision a future where technology
            and human ingenuity create limitless possibilities.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Pioneering new ideas and technologies.</li>
            <li><strong>Integrity:</strong> Upholding the highest ethical standards.</li>
            <li><strong>Customer Focus:</strong> Putting our customers at the heart of everything we do.</li>
            <li><strong>Collaboration:</strong> Working together to achieve common goals.</li>
            <li><strong>Sustainability:</strong> Committing to environmentally responsible practices.</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.companySection} ${styles.teamSection}`}>
        <div className={styles.sectionContent}>
          <h2>Meet Our Team</h2>
          <p className={styles.teamIntro}>
            We are a group of passionate professionals dedicated to making a difference.
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMemberCard}>
              {/* Placeholder for an image */}
              <div className={styles.teamMemberImagePlaceholder}></div>
              <h3>Dr. Evelyn Reed</h3>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImagePlaceholder}></div>
              <h3>Marcus Chen</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImagePlaceholder}></div>
              <h3>Aisha Khan</h3>
              <p>Head of Operations</p>
            </div>
             <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImagePlaceholder}></div>
              <h3>Robert Bell</h3>
              <p>Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.companySection} ${styles.historySection}`}>
        <div className={styles.sectionContent}>
          <h2>Our Journey</h2>
          <p>
            Founded in 2010, ShowcasePro started with a vision to revolutionize the industry.
            Over the years, we've achieved significant milestones, expanded our offerings, and
            built lasting relationships with our clients. Our commitment to innovation and
            customer satisfaction has been the cornerstone of our growth, guiding us from a
            small startup to a trusted partner for businesses worldwide. We look forward to
            many more years of shared success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
