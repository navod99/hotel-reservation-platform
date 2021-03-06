import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EditModal from './EditModal';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginBottom: 20,

  },


}));


const ViewHotels = () => {
  const classes = useStyles();
  const [hotels, setHotels] = useState([]);
  const [isToggle,setIsToggle] = useState(false);

  useEffect(() => {
    function getHotels() {
      axios.get("http://localhost:8280/hotel/gethotel").then((res) => {
        setHotels(res.data);
      }).catch((err) => {
        alert(err.message);
        console.log(err.message);
      })
    }
    getHotels()

  }, [isToggle])

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={6}>
        {hotels.map((hotel, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={`/uploads/${hotel.image}`}
                alt="random"
                height='240px'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography textAlign={'center'} gutterBottom variant="h5" component="h2">
                  {hotel.hotelName}
                </Typography>
                <Chip label={`${hotel.title} hotel`} />
                <Typography marginTop={1} marginLeft={1} variant="h6" >
                  {hotel.district}
                </Typography>
                <Typography marginTop={1} marginLeft={1} >
                  {hotel.description}
                </Typography>
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
                   <EditModal id={hotel._id} name={hotel.hotelName} districtEdit={hotel.district} descriptionEdit={hotel.description} titleEdit={hotel.title} imageEdit={hotel.image} setIsToggle={setIsToggle} isToggle={isToggle}/> 
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

  )
}

export default ViewHotels