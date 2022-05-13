import { Avatar, Grid, Paper, TextField, Typography, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Addhotel = () =>{

    const paperStyle={padding: '40px 20px', width:600, margin: '30px auto'}
    const avatarStyle={backgroundColor:'blue'}

     return (

        <div>
        <Header/>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                     <AddBusinessIcon/>
                    </Avatar>
                    <h2>Hotel Registration</h2>
                    <Typography variant='caption'>Please fill in the below information!</Typography>
                </Grid>
                <br/>
                <form>
                    <TextField variant="standard" fullWidth label="Name of the Hotel"/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0, max: 5 } }} label="Star Rating"/><br/><br/><br/>
                    <Typography variant='label' fontWeight='bold'>Contact Details</Typography>
                    <TextField variant="standard" fullWidth label="Manager's Name"/>
                    <TextField variant="standard" fullWidth label="Hotel Phone number"/><br/><br/><br/>
                    <Typography variant='label' fontWeight='bold'>Location</Typography>
                    <TextField variant="standard" fullWidth label="Street Address"/>
                    <TextField variant="standard" fullWidth label="City"/>
                    <TextField variant="standard" fullWidth label="Country"/><br/><br/><br/>
                    <Typography variant='label' fontWeight='bold'>Layout and Pricing</Typography>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0 } }} label="Number of Single bedrooms"/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0 } }} label="Price per night(LKR)"/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0 } }} label="Number of Double bedrooms"/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0 } }} label="Price per night(LKR)"/>
                </form>
            </Paper>
        </Grid>
         <Footer/>
         </div>
     )
}

export default Addhotel;
