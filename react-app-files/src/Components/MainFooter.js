import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function MainFooter() {

    function changeBackground(image) {
        if (image == 1){
   document.body.style.backgroundImage = "url('https://cdn.glitch.global/42ef66cc-8c79-4874-aa40-002089184c30/R%2BM.jpg?v=1645905015019')";}
        if (image == 2){
   document.body.style.backgroundImage = "url('https://cdn.glitch.global/42ef66cc-8c79-4874-aa40-002089184c30/sunglasRM.png?v=1645907068512')";}
}



    return (
        <footer className='footer'>
            <h1>Backround Change</h1>
<button onclick={changeBackground(1)} style="font-size:48px;color:red;background-color:black;border-radius: 30%; "> <i class="fa-solid fa-heart fa-beat"></i></button>&nbsp&nbsp&nbsp&nbsp
    <button onclick={changeBackground(2)} style="font-size:48px;color:yellow;background-color:black;border-radius: 30%; "> <i class="fa-regular fa-sun fa-fade" style="--fa-beat-fade-opacity: 0.13; --fa-beat-fade-scale: 1.675;"></i></button>
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