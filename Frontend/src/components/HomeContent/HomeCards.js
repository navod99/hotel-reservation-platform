import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import card1 from "../Images/card1.jpg"
import card2 from "../Images/card2.jpg"
import card3 from "../Images/card3.jpg"


const HomeCards = () => {

    const cards = [{
        id:1,
        name: 'Find your perfect trip',
        image: card1,
        description: 'Plan a trip for the whole family - from family travel tips to family-friendly filters, our tools make it easy '
    }, 
    {
        id:2,
        name: 'Book with flexibility',
        image: card2,
        description: 'Looking for a change of scenery, but want something flexible? With free cancellation on most hotels you can book with peace of mind'
    }, 
    {
        id:3,
        name: "We've got your back",
        image: card3,
        description: 'Need more help along your journey? We offer 24/7 support on social and through virtual agents onsite '
    }];

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={6}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={card.image}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography>
               {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
        </Container>
    )
}

export default HomeCards