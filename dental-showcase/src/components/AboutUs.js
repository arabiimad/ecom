import React from 'react';
import { Container, Typography, Paper, Box, Fade } from '@mui/material';

const AboutUs = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}> {/* Using theme default background */}
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            About Us
          </Typography>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Placeholder text: To provide exceptional, patient-centered dental care that improves oral health and overall well-being. We are committed to utilizing advanced technology and fostering a compassionate environment.
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Placeholder text: To be a leading dental practice recognized for excellence in clinical care, patient experience, and community engagement. We aim to inspire lifelong healthy smiles.
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
              Our Values
            </Typography>
            <Typography variant="body1" color="text.secondary" component="ul" sx={{ pl: 2 }}>
              <li>Integrity: Upholding the highest ethical standards.</li>
              <li>Compassion: Treating every patient with empathy and respect.</li>
              <li>Excellence: Striving for the best in all we do.</li>
              <li>Innovation: Embracing new technologies and techniques.</li>
              <li>Teamwork: Collaborating to achieve optimal patient outcomes.</li>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
};

export default AboutUs;
