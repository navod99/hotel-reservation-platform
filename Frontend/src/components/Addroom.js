import { Avatar, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import axios from "axios";
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Addroom() {

    const [roomname , setRoomname] = useState("");
    const [occupants , setOccupants] = useState("");
    const [area , setArea] = useState("");
    const [description , setDescription] = useState("");
    const [numberofrooms , setNumberofrooms] = useState("");
    const [pricepernight , setPricepernight] = useState("");

        function sendData(e){
           e.preventDefault();

           const newHotel ={
            roomname,
            occupants,
            area,
            description,
            numberofrooms,
            pricepernight

           }
           
           axios.post("http://localhost:8000/hotel/add", newHotel).then(() =>{
              alert("Room Added")
           }).catch((err) =>{
              alert(err)
           })
         
        }

    const paperStyle={padding: '40px 20px', width:600, margin: '30px auto'}
    const avatarStyle={backgroundColor:'blue'}
    const addbtn={margin: '20px 250px'}

     return (

        <div>
        <Header/>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                     <AddBusinessIcon/>
                    </Avatar>
                    <h2>Room Details</h2>
                    <Typography variant='caption'>Please fill in the below information!</Typography>
                </Grid>
                <br/>
                <form>
                    <TextField variant="standard" fullWidth label="Name of the room" onChange={(e)=>{
                       
                       setRoomname(e.target.value);

                    }}/><br/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0, max: 10 } }} label="Occupant Capacity"  onChange={(e)=>{
                       
                       setOccupants(e.target.value);
                       
                    }}/><br/>
                    
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0, max: 1000 } }} label="Room Size(Sq. ft)"  onChange={(e)=>{
                       
                       setArea(e.target.value);

                    }}/><br/>
                    <TextField variant="standard" fullWidth label="Room Description" onChange={(e)=>{
                       
                       setDescription(e.target.value);

                    }}/><br/>
                    
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0, max: 1000 } }} label="Number of rooms"  onChange={(e)=>{
                       
                       setNumberofrooms(e.target.value);

                    }}/><br/>
                    <TextField variant="standard" fullWidth type="number" InputProps={{ inputProps: { min: 0, max: 100000 } }} label="Price per night"  onChange={(e)=>{
                       
                       setPricepernight(e.target.value);

                    }}/><br/>
                    <br/>
                    
                    <Button style={addbtn} variant="contained" onClick={sendData}>Submit</Button>
                </form>
            </Paper>
        </Grid>
         <Footer/>
         </div>
     )
}

export default Addroom;
