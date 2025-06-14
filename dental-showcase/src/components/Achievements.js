import React from 'react';
import { Container, Typography, Grid, Paper, Box, Fade } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // Example Icon

const achievements = [
  {
    title: 'Top Rated Dental Practice 2023',
    description: 'Awarded by Local Health Awards for outstanding patient care and service.',
    icon: <StarIcon color="warning" sx={{ fontSize: 40 }} />
  },
  {
    title: '10,000+ Happy Smiles',
    description: 'We have proudly served over ten thousand patients, helping them achieve their dream smiles.',
    icon: <StarIcon color="warning" sx={{ fontSize: 40 }} />
  },
  {
    title: 'Community Service Award',
    description: 'Recognized for our commitment to providing free dental check-ups for local schools.',
    icon: <StarIcon color="warning" sx={{ fontSize: 40 }} />
  },
];

const Achievements = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            Our Achievements
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={{ mb: 2 }}>{achievement.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default Achievements;
