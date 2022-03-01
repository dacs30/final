import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function MainBody() {
    return (
        <div>
            <div className='main-body-item'>
                
                <Grid direction="row" container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <h2>Characters screen time</h2>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Paper style={{ width: "30vw", height: 300 }}></Paper>
                    </Grid>
                </Grid>

                <Grid direction="row" container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <Paper style={{ width: "30vw", height: 300 }}></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <h2>Tree view</h2>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MainBody