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
    return (
        <Container style={{ marginTop: "10px" }} size="sm">
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                <Typography
                    variant="h5"
                    color="textPrimary"
                    component="h2"
                    gutterBottom
                    align='center'
                >
                   Add Hotel
                </Typography>
                <form onSubmit={onsubmit}>
                    <TextField className={classes.field}
                        // onChange={(e) => setRecipeName(e.target.value)}
                        label="Hotel Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required

                    />
                     <TextField className={classes.field}
                        // onChange={(e) => setRecipeName(e.target.value)}
                        label="Title"
                        variant="outlined"
                        color="secondary"
                        fullWidth    
                    />
                     <TextField className={classes.field}
                        // onChange={(e) => setRecipeName(e.target.value)}
                        label="District"
                        variant="outlined"
                        color="secondary"
                        fullWidth    
                    />
                    <TextField className={classes.field}
                        // onChange={(e) => setDescription(e.target.value)}
                        label="Description"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                    />
                     <TextField className={classes.field}
                        // onChange={(e) => setDescription(e.target.value)}
                        label="Hotel Location"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <div style={{ textAlign: 'center', marginTop: "50px" }}>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                        >
                            Add
                        </Button>
                    </div>

                </form>
            </Paper>
        </Container>
    )
}

export default AddHotels