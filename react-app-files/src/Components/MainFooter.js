import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function MainFooter() {
    return (
        <footer className='footer'>
            <Box>
                <Container maxWidth="lg">
                    <Grid alignContent={'center'} container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" color="white" gutterBottom>
                                Footer
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Something here to give the footer a purpose!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" color="white" gutterBottom>
                                Footer
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Something here to give the footer a purpose!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" color="white" gutterBottom>
                                Footer
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Something here to give the footer a purpose!
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box textAlign={'center'} pt={{ xs: 5, sm: 10 }} pb={{ xs: 4 }}>
                <Typography variant="body2" color="white">
                    CS480X Final Project &reg; {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    )
}

export default MainFooter