import React from 'react'
import homebanner from "../Images/homebanner.jpg"
import { Box, Stack} from '@mui/material'
import { Typography } from '@material-ui/core';

const HomeBanner = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            <img
                src={homebanner}
                alt="Lovely"
                width="100%"
                height="800"
            />
            <Box sx={{ position: 'absolute', inset: '0', zIndex: '1' }}>
                <div style={{ position: "absolute", top: 60, paddingLeft: 24 }}>
                    <Stack direction={'column'} spacing={1}>
                        <Typography variant='h4' style={{fontWeight:600}}>
                            Find the perfect hotel on Traveler.com
                        </Typography>
                        <Typography variant='h6' color='#003580' >
                            From budget hotels to luxury rooms and everything in between
                        </Typography>
                    </Stack>
                </div>

            </Box>
        </Box>
    )
}

export default HomeBanner