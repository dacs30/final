import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function MainBody() {
    return (
        <div>
            <div className='main-body-item'>
                <Grid direction="column" container spacing={10}>
                
                <Grid item direction="row" container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <h2>Characters screen time</h2>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Paper style={{ width: "30vw",minWidth: "100%", height: 300 }}></Paper>
                    </Grid>
                </Grid>

                <Grid item direction="row" container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} order={{md: 1,xs: 2, sm: 2, lg: 2}} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <Paper style={{ width: "30vw",minWidth: "100%", height: 300 }}></Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} order={{md: 2,xs: 1, sm: 1, lg: 2}} style={{ display: "flex", justifyContent: "flex-end", verticalAlign: 'top'}}>
                        <h2>Tree view</h2>
                    </Grid>
                </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default MainBody