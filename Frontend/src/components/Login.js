import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import coconut from './Images/cocunut.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const bcrypt = require('bcryptjs');


const Login = () => {
    const theme = createTheme();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/user/validate", { email: email }).then((res) => {
            let hashPass = res.data.password;
            const isValid = bcrypt.compareSync(password, hashPass);
            if (isValid) {
                const token = {
                    id: res.data._id,
                    firstname: res.data.firstName,
                    lastname: res.data.lastName,
                    email: res.data.email,
                    type: res.data.type
                }
                sessionStorage.setItem("token", JSON.stringify(token));
                switch (token.type) {
                    case "customer":
                        navigate('/')
                        break;
                    case "systemadmin":
                        navigate('/admindashboard')
                        break;
                    default:
                        setToggle(true)
                        break;
                }
            }
            else {
                alert('Invalid credentials')
            }
        }
        ).catch(() => {
            axios.post("http://localhost:5000/hotel/validate", { email: email }).then((res) => {
                let hashPass = res.data.password;
                const isValid = bcrypt.compareSync(password, hashPass);
                if (isValid) {
                    const token = {
                        id: res.data._id,
                        firstname: res.data.firstName,
                        lastname: res.data.lastName,
                        email: res.data.email,
                        type: res.data.type
                    }
                    sessionStorage.setItem("token", JSON.stringify(token));
                    navigate('/hoteladmindashboard')
                }
                else {
                    alert('Invalid credentials')
                }
            }
            ).catch((err) => {
                console.log(err)
            })
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${coconut})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <form onSubmit={handleSubmit} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                valur={password}
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" align="center" marginTop={5}>
                            {'Copyright © '}
                            <Link color="inherit" >
                                Traveler.com
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>)
}

export default Login