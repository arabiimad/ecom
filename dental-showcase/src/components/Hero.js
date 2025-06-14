import React from 'react';
import { Container, Typography, Button, Box, Fade } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'alternate.main', py: { xs: 4, md: 8 } }}> {/* Assuming theme extension for alternate.main or use a direct color */}
      <Container maxWidth="md">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', color: 'text.primary' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              Welcome to Our Dental Showcase
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
              Experience top-quality dental care with our expert team.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/services">
              Our Services
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
