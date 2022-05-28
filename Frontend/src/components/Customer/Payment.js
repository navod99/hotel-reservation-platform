import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'

const Payment = () => {
    const theme = createTheme();
    const [name, setName] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [amount, setAmount] = useState()
    const [email, setEmail] = useState()
    const [cvc, setCvc] = useState()
    const [roomname, setRoomname] = useState()
    const [norooms, setNorooms] = useState()
    const [checkin, setCheckin] = useState()
    const [ChekoutDate, setCheckout] = useState()
    const [adults, setAdults] = useState()
    const [childeren, setChildern] = useState()
    let taxi = JSON.parse(sessionStorage.getItem("taxi"))

    useEffect(() => {
        const rooms = JSON.parse(sessionStorage.getItem("rooms"))
        const users = JSON.parse(sessionStorage.getItem("token"))
        const reservation = JSON.parse(sessionStorage.getItem("reservation"))
        setAmount(rooms.pricepernight)
        setEmail(users.email)
        setRoomname(rooms.roomname)
        setCheckin(reservation.CheckinDate)
        setCheckout(reservation.ChekoutDate)
        setNorooms(reservation.numberOfRooms)
        setAdults(reservation.AdultCount)
        setChildern(reservation.ChildCount)

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const payment = {
            "amount": amount,
            "tomail": email,
        }
        const booking = {
            "roomname": roomname,
            "numberofrooms": norooms,
            "checkindate": checkin,
            "ChekoutDate": ChekoutDate,
            "adults": adults,
            "childeren": childeren,
            "tomail": email,
        }
        if (taxi) {
            const taxiservice = {
                "address": taxi.address,
                "roomname": roomname,
                "type": taxi.type,
                "tomail": email,
            }
        }
        axios.post("http://localhost:5000/hotel/payment", payment).then((res) => {
            console.log("asadas")
            alert("sucessfull payment")
        }).catch((err) => {
            console.log(err)
        })
        axios.post("http://localhost:5000/hotel/mail", booking).then((res) => {

        }).catch((err) => {
            console.log(err)
        })
        if (taxi) {
            axios.post("http://localhost:5000/hotel/taxi", taxiservice).then((res) => {

            }).catch((err) => {
                console.log(err)
            })
        }

    }

    return (
        <div>
            <Header />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingBottom: 8
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Payment
                        </Typography>
                        <form onSubmit={handleSubmit} style={{ marginTop: 15 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Card Holder name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="cardNumber"
                                        label="Credit Card number"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="amount"
                                        label="Amount"
                                        value={amount}
                                        disabled
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="CVC"
                                        type="password"
                                        value={cvc}
                                        onChange={(e) => setCvc(e.target.value)}
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                // onClick={handleSignUp}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Pay here
                            </Button>
                        </form>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer />
        </div>
    )
}

export default Payment