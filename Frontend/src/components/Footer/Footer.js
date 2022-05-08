import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import IconButton from '@mui/material/IconButton';

const Footer = () => {
    const footers = [
        {
            title: 'Company',
            description: ['View Hotels', 'About', 'Contact us'],
        },

        {
            title: 'Resources',
            description: ['FacebookIcon', 'Resource name', 'Another resource', 'Final resource'],
        }

    ];

    return (
        <div style={{background:'#003580'}}>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],

                }}
            >

                <Grid container spacing={4} justifyContent="space-evenly">
                    <Grid item xs={6} sm={3} >
                        <Typography variant="h6" color="white" gutterBottom>
                            Company
                        </Typography>
                        <li >
                            <Link href="#" variant="subtitle1" color="inherit">
                                View Hotels
                            </Link>
                        </li>
                        <li >
                            <Link href="#" variant="subtitle1" color="inherit">
                                View Bookings
                            </Link>
                        </li>
                        <li >
                            <Link href="#" variant="subtitle1" color="inherit">
                                About
                            </Link>
                        </li>
                        <li >
                            <Link href="#" variant="subtitle1" color="inherit">
                                Contact us
                            </Link>
                        </li>
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <Typography variant="h6" color="white" gutterBottom>
                            Stay Connected
                        </Typography>

                        <li >
                            <IconButton>
                                <FacebookIcon style={{ color:"#4267B2"}} />
                            </IconButton>
                        </li>
                        <li >
                            <IconButton>
                                <InstagramIcon style={{ color:"#E1306C"}} />
                            </IconButton>
                        </li>
                        <li >
                            <IconButton>
                                <YouTubeIcon style={{ color:"#FF0000"}} />
                            </IconButton>
                        </li>
                    </Grid>

                </Grid>
                <Typography variant="body2" color="white" align="center" >
                    {'Copyright © '}
                    <Link color="inherit">
                        Traveler.com
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>

            </Container>
        </div>

    )
}

export default Footer