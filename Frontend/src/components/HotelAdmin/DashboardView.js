import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';


const DashboardView = ({ hotelDetails }) => {
    return (
        <Box >
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <Card sx={{ maxWidth: 1300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="500"
                            image={`/uploads/${hotelDetails.image}`}
                            alt="green iguana"
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
        </Box>
    )
}

export default DashboardView