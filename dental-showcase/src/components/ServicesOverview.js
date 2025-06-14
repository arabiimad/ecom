import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, Box, Fade } from '@mui/material';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive care including check-ups, cleanings, fillings, and preventative treatments.',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with teeth whitening, veneers, bonding, and smile makeovers.',
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with braces or clear aligners.',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for infants, children, and adolescents.',
  },
];

const ServicesOverview = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'alternate.main' }}> {/* Using theme alternate.main color from App.js */}
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    title={service.title}
                    titleTypographyProps={{ align: 'center', variant: 'h6', component: 'h3', sx:{fontWeight: 'medium'} }}
                    sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default ServicesOverview;
