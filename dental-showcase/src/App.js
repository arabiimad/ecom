import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'; // Added ThemeProvider and createTheme for potential future use
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesOverview from './components/ServicesOverview';
import Achievements from './components/Achievements';
import ContactUs from './components/ContactUs';

// A very basic theme can be defined here if needed, or expanded later
const theme = createTheme({
  palette: {
    // mode: 'light', // or 'dark'
    // primary: {
    //   main: '#1976d2',
    // },
    // secondary: {
    //   main: '#dc004e',
    // },
    alternate: { // Example custom color, used in Hero.js
      main: '#f0f0f0', // A light gray
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> {/* ThemeProvider added */}
      <CssBaseline /> {/* CssBaseline for consistent styling */}
      {/* <div className="App"> Remove existing className if App.css is fully replaced */}
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesOverview />
      <Achievements />
      <ContactUs />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
