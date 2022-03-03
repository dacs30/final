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
                    <Grid container textAlign={'center'} direction="row" spacing={2}>
                        <Grid item direction="column" item xs={12} sm={6} md={6}>
                            <Typography variant="h6"  color="white" gutterbottom>
                                Contributors
                            </Typography>
                            <Typography variant="subtitle1" color="white" gutterbottom>
                                <a href="https://github.com/dacs30">Danilo Correia </a>
                            </Typography>
                            <Typography variant="subtitle1" color="white" gutterbottom>
                                <a href="https://github.com/cjdunn2">Craig James Dunn </a>
                            </Typography>
                            <Typography variant="subtitle1" color="white" gutterbottom>
                                <a href="https://github.com/orestropi">Orest Ropi</a>
                            </Typography>
                            <Typography variant="subtitle1" color="white" gutterbottom>
                                <a href="https://github.com/mcaten">Maddison Caten</a>
                            </Typography>
                        </Grid>
                        <Grid item direction="column" xs={12} sm={6} md={6}>
                            <Typography variant="h6" color="white" gutterbottom>
                                Explore
                            </Typography>
                            <Typography variant="subtitle1" color="white" gutterbottom>
                                <a href="https://towardsdatascience.com/the-office-story-thats-what-the-data-said-224e8a6f47e">inspirations</a>
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