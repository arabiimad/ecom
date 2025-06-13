import React from 'react';
import { Outlet } from 'react-router-dom'; // For rendering child routes
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './RootLayout.module.css';

const RootLayout: React.FC = () => {
  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
