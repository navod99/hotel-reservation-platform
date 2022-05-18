import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ViewRoom() {
  
  const [rooms, setRooms] = useState([]);
    const params = useParams();
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate();
    const reserve = () => {
        if (token.id != null) {
            navigate('/')
        }
        
    }
    useEffect(() => {
       
            const getrooms = () => {
                axios
                    .get(`http://localhost:8000/hotel/get/${params.id}`)
                    .then((res) => {
                        setRooms(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
            };
            getrooms();
        }
    );
    
  return (
    <>
       
        <Stack spacing={3}>
          <Header />
          {rooms.map((room)=>(
            <Grid container justifyContent="center">
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 350 }}
                  image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Stack spacing={2}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h3">
                        {room.roomname}
                      </Typography>
                     
                        
                          <Typography>
                            occupants: {room.occupants}
                          </Typography>
                        
                        
                          <Typography>
                           area: {room.area}
                          </Typography>
                       
                       
                          <Typography component="div">
                            description: {room.description}
                          </Typography>
                        
                          <Typography component="div">
                            Number of Rooms: {room.numberofrooms}
                          </Typography>
                       
                        
                      
                    </CardContent>
                    
                     
                              <Button variant="contained" color="success" onClick={() => reserve()}>Reserve {room.pricepernight}</Button>
                       
                        
                        
                    
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
          <Footer />
        </Stack>
      
    </>
  );
}