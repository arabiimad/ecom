import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper, Fade } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'alternate.main' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: { xs: 2, md: 3 } }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Send Us a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Our Contact Details
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1.5, color: 'primary.main' }} />
                  <Typography variant="body1" color="text.secondary">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1.5, color: 'primary.main' }} />
                  <Typography variant="body1" color="text.secondary">
                    contact@dentalshowcase.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 1.5, color: 'primary.main', mt: 0.5 }} />
                  <Typography variant="body1" color="text.secondary">
                    123 Dental Avenue, Smileytown, ST 54321
                  </Typography>
                </Box>
                <Box sx={{ mt: 3, width: '100%', height: '200px', bgcolor: 'grey.300' }}>
                  {/* Placeholder for a map, e.g., Google Maps iframe */}
                  <Typography variant="caption" display="block" align="center" sx={{ pt: 'calc(50% - 10px)' }}>
                    Map Placeholder
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default ContactUs;
