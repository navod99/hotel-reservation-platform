import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import HailIcon from '@mui/icons-material/Hail';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PickupDetails = () => {
    const theme = createTheme();
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [type, setType] = useState()
    const [no, setNo] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const taxi = {
            "city": city,
            "address": address,
            "type": type,
            "no":no
        }
        sessionStorage.setItem("taxi", JSON.stringify(taxi));
        navigate('/payment')
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
                            <HailIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Pickup
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="city"
                                        label="Your City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="Your Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Vehicle Type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <MenuItem value={'car'}>Car</MenuItem>
                                            <MenuItem value={'tuk'}>Tuk Tuk</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={no}
                                        onChange={(e) => setNo(e.target.value)}
                                        label="Contact Number"
                                        type='number'
                                    />
                                </Grid>
                            </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Confirm Taxi
                                </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer />
        </div>
    )
}

export default PickupDetails