import React, { useState } from 'react'
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
import { Validate } from 'mui-validate';
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const bcrypt = require('bcryptjs');

const Signup = () => {
    const theme = createTheme();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open1, setOpen1] = React.useState(false);

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen1(false);
    };

    const handleClick = () => {
        setOpen1(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let bcPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

        const newUser = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": bcPassword,
            "type": "customer",
        }

        axios.post("http://localhost:5000/user/create", newUser).then((res) => {
            handleClick()
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <Snackbar open={open1} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}>

                <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>

                    `Sucessfully Registered!`
                </Alert>
            </Snackbar>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                            <form onSubmit={handleSubmit} style={{marginTop:15}} >
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
                                            type="email"
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    <Typography variant="body2" color="text.secondary" align="center" marginTop={5} >
                        {'Copyright © '}
                        <Link color="inherit" href="https://mui.com/">
                            Traveler.com
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Signup