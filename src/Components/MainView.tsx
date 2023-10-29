import React from 'react';
import { Grid } from '@mui/material';
import View from './About/View';
import Dashboard from './Dashboard';


const MainView = ()=>{

    return (
        <Grid container md={12}>
            <Grid item md={2}>
                <Dashboard/>
            </Grid> 
            <Grid item md={10}>
                <View/>
            </Grid> 
        </Grid> 
    )
}

export default MainView;