import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const HotelView = () => {
    let params = useParams()
    const [hotelDetails, setHotelDetails] = useState("")

    useEffect(() => {
        function getHotels() {
            console.log(params.id, "params")
            axios.get(`http://localhost:5000/hotel/${params.id}`).then((res) => {
                setHotelDetails(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getHotels()
    }, [])

    return (
        <Box >
            <Header />
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <Card sx={{ maxWidth: 1400 ,marginTop:5,mx:4}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={`/uploads/${hotelDetails.image}`}
                            alt="random"
                            height="500"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="h2">
                                {hotelDetails.hotelName}
                            </Typography>
                            <Chip label={`${hotelDetails.title} hotel`} />
                            <Typography marginTop={1} marginLeft={1} variant="h6" >
                                {hotelDetails.district}
                            </Typography>
                            <Typography marginTop={1} marginLeft={1} >
                                {hotelDetails.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Card>
            <Footer/>
        </Box>
    )
}

export default HotelView