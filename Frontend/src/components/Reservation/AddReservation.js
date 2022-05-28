import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ManIcon from "@mui/icons-material/Man";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Stack } from "@mui/material";
import { spacing } from "@mui/system";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import TaxiModel from "../TaxiModel";


//import { AdapterDayjs } from '@mui//AdapterDayjs'
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
export default function ImgMediaCard() {
  const res = JSON.parse(sessionStorage.getItem("res"))
  console.log(res);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [AdultCount, setAdultCount] = useState(res != null ? res.AdultCount : "");
  const [ChildCount, setChildCount] = useState(res != null ? res.ChildCount : "");
  const [checkinDate, setCheckInDate] = useState(res != null ? res.checkinDate : "");
  const [checkOutDate, setCheckOutDate] = useState(res != null ? res.ChekoutDate : "");
  const [noofRooms, setnoofRooms] = useState(res != null ? res.numberOfRooms : "");
  const params = useParams()
  const user = JSON.parse(sessionStorage.getItem("token"))
  console.log(params.id)
  const submit = () => {
    console.log(user.id)
    const reservation = {
      AdultCount: AdultCount,
      ChildCount: ChildCount,
      CheckinDate: checkinDate,
      ChekoutDate: checkOutDate,
      numberOfRooms: noofRooms,
      UserId: user.id,
      HotelId: params.id
    };
    console.log(checkOutDate)
    if (res == null) {
      axios
        .post('http://localhost:5001/reservation/create', reservation)
        .then(() =>{
          sessionStorage.setItem("reservation", JSON.stringify(reservation));
          handleOpen()
        })
        .catch((err) => { alert(err) })
    } else {
      axios
        .put(`http://localhost:5001/reservation/Edit/${res._id}`,reservation)
        .then(alert("updated Sucessfully"))
        .catch((err) => console(err)
        )
      sessionStorage.removeItem("res")
    }
    

}

  return (
    <Stack spacing={2}>
      <Header />
      <TaxiModel handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}/>
      <Grid container justifyContent="center">
        <Card sx={{ minWidth: 700, maxWidth: 700 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="350"
            image="http://www.bedbreakfast.ee/wp-content/uploads/2016/10/hotel-room.jpg"
            justifyContent="center"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hotel
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              Validate
              mt={2} 
            >
              <FormControl variant="standard">
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  spacing={8}
                >
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Adult Count"
                    variant="standard"
                    type="number"
                    size="medium"
                    value={AdultCount}
                    onChange = {(e)=>setAdultCount(e.target.value)}
                  />
                </Box>
              </FormControl>
              <FormControl variant="standard">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Child Count"
                    variant="standard"
                    type="number"
                    size="medium"
                    value={ChildCount}
                    onChange = {(e)=>setChildCount(e.target.value)}
                  />
                </Box>
              </FormControl>
              <FormControl>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Number of Rooms"
                    variant="standard"
                    size="medium"
                    value={noofRooms}
                    onChange = {(e)=>{setnoofRooms(e.target.value)}}
                  />
                </Box>
              </FormControl>
              
              <FormControl variant="standard">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Check In Date
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value = {checkinDate}
                  onChange = {(e)=>setCheckInDate(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  />
                  </Box>
              </FormControl>
              <FormControl variant="standard">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Check Out Date
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                     value={checkOutDate}
                     onChange = {(e)=> setCheckOutDate(e.target.value)}                                                                    
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  />
                  </Box>
              </FormControl>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success" onClick={submit}>Reserve</Button>
          </CardActions>
        </Card>
      </Grid>

      <Footer />
    </Stack>
  );
}
