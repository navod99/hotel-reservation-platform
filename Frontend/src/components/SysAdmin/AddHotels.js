import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const bcrypt = require('bcryptjs');


const useStyles = makeStyles((theme) => ({

    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    multi: {
        marginTop: 10,
        paddingTop: 10,
        marginBottom: 20
    },


}))


const AddHotels = () => {
    const classes = useStyles()
    const [hotelName, setHotelName] = useState('')
    const [hotelTitle, setHotelTitle] = useState('')
    const [hotelDescription, setHotelDescription] = useState('')
    const [district, setDistrict] = useState('')
    const [image, setImage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        let bcPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

        const formData = new FormData();

        formData.append('hotelName', hotelName);
        formData.append('title', hotelTitle);
        formData.append('description', hotelDescription);
        formData.append('district', district);
        formData.append('image', image);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', bcPassword);
        formData.append('type', 'hoteladmin');


        // const newHotel = {
        //     "hotelName": hotelName,
        //     "title": hotelTitle,
        //     "description": hotelDescription,
        //     "district": district,
        //     "image": image
            
        // }
        console.log(formData)

        axios.post("http://localhost:5000/hotel/create", formData).then((res) => {
            alert('Hotel Added successfully')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Container style={{ marginTop: "10px" }} size="sm">
            <Paper elevation={8} sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                <Typography
                    variant="h5"
                    color="textPrimary"
                    component="h2"
                    gutterBottom
                    align='center'
                >
                    Add Hotel
                </Typography>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <TextField className={classes.field}
                        onChange={(e) => setHotelName(e.target.value)}
                        label="Hotel Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required

                    />
                    <label style={{ fontSize: '1.3rem', color: 'grey', marginLeft: 5 }}>
                        Add an image
                    </label>
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        filename="image"
                        style={{ marginLeft: 16 }}
                        onChange={(e) => setImage(e.target.files[0])} />
                    <TextField className={classes.field}
                        onChange={(e) => setHotelTitle(e.target.value)}
                        label="How many Stars ?"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                    />
                    <TextField className={classes.field}
                        onChange={(e) => setDistrict(e.target.value)}
                        label="District"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                    />

                    <TextField className={classes.field}
                        onChange={(e) => setHotelDescription(e.target.value)}
                        label="Description"
                        variant="outlined"
                        color="secondary"
                        multiline
                        minRows={4}
                        fullWidth
                    />
                    <TextField className={classes.field}
                        // onChange={(e) => setDescription(e.target.value)}
                        label="Hotel Location"
                        variant="outlined"
                        color="secondary"
                        multiline
                        minRows={4}
                        fullWidth
                    />
                    <Box sx={{ mt: 5 }}>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            component="h2"
                            gutterBottom
                            align='center'
                        >
                            Hotel Admin Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <div style={{ textAlign: 'center', marginTop: "50px" }}>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            size="large"
                        >
                            Add Hotel
                        </Button>
                    </div>

                </form>
            </Paper>
        </Container>
    )
}

export default AddHotels