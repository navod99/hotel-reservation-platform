import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, CardActions } from "@mui/material";

export default function MediaControlCard() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [reservations, setReservations] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();
    useEffect(() => {
        if (token != null) {
            const getBooking = () => {
                axios
                    .get(`http://localhost:5001/reservation/user/${token.id}`)
                    .then((res) => {
                        setReservations(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
            };
            getBooking();
        }
    } );
    const onDelete = (rID) => {
       
        axios.delete(`http://localhost:5001/reservation/delete/${rID}`)
            .then(alert("Sucessfully Deleted"))
            .catch((err) => { alert(err) })
        
 }
  return (
    <>
      {token != null ? (
        <Stack spacing={3}>
          <Header />
          {reservations.map((reservation) => (
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
                        Hotel
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Typography>
                            Number of Rooms: {reservation.numberOfRooms}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography>
                            Adult Count: {reservation.AdultCount}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography component="div">
                            Child Count: {reservation.ChildCount}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography component="div">
                            Check in Date: {reservation.CheckinDate}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography component="div">
                            Check out Date {reservation.CheckoutDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Grid>
                                  <Button>Edit</Button>
                                   <Button color="error" onClick={()=>onDelete(reservation._id)}>Cancel</Button>
                    </Grid>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
          <Footer />
        </Stack>
      ) : (
        () => {
          navigate("/login");
        }
      )}
    </>
  );
}
