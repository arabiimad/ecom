import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion if planning to use Framer Motion directly

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, '& a': { textDecoration: 'none', color: 'inherit' } }}>
          <a href="/">Logo</a>
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              href={item.href}
              component={motion.a} // Using motion.a for Framer Motion if desired
              whileHover={{ scale: 1.05, color: '#1976d2' }} // Example hover effect
              sx={{ margin: '0 8px', textTransform: 'none' }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            href="/shop"
            component={motion.a}
            whileHover={{ scale: 1.05, backgroundColor: 'primary.dark' }}
            sx={{ textTransform: 'none' }}
          >
            Shop
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
