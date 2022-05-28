import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@material-ui/core/Container'
import Paper from '@mui/material/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

const EditModal = ({ id, name, districtEdit, descriptionEdit, titleEdit, setIsToggle, isToggle, imageEdit }) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setHotelName(name)
        setDistrict(districtEdit)
        setHotelDescription(descriptionEdit)
        setHotelTitle(titleEdit)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [hotelName, setHotelName] = useState('')
    const [title, setHotelTitle] = useState('')
    const [hotelDescription, setHotelDescription] = useState('')
    const [district, setDistrict] = useState('')
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
        console.log(id)

        const newHotel = {
            "hotelName": hotelName,
            "title": title,
            "description": hotelDescription,
            "district": district
        }

        axios.put(`http://localhost:5000/hotel/update/${id}`, newHotel).then((res) => {
            setIsToggle(!isToggle)
            handleClick()
            handleClose()
        }).catch((err) => {
            console.log(err)
        })
    }




    return (
        <div>
              <Snackbar open={open1} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}>

                <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
                 
                        `Sucessfully Edited!`
                </Alert>
            </Snackbar>
            <Button size="small" variant="outlined" onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container style={{ marginTop: "10px" }} size="sm">
                    <Paper elevation={8} sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            component="h2"
                            gutterBottom
                            align='center'
                        >
                            Edit Hotel
                        </Typography>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <TextField className={classes.field}
                                onChange={(e) => setHotelName(e.target.value)}
                                label="Hotel Name"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                value={hotelName}
                                required

                            />
                            <TextField className={classes.field}
                                onChange={(e) => setHotelTitle(e.target.value)}
                                label="How many Stars ?"
                                variant="outlined"
                                color="secondary"
                                value={title}
                                fullWidth
                            />
                            <TextField className={classes.field}
                                onChange={(e) => setDistrict(e.target.value)}
                                label="District"
                                variant="outlined"
                                color="secondary"
                                value={district}
                                fullWidth
                            />
                            <TextField className={classes.field}
                                onChange={(e) => setHotelDescription(e.target.value)}
                                label="Description"
                                variant="outlined"
                                color="secondary"
                                multiline
                                minRows={4}
                                value={hotelDescription}
                                fullWidth
                            />

                            <div style={{ textAlign: 'center', marginTop: "50px" }}>
                                <Button
                                    type="submit"
                                    color="secondary"
                                    variant="contained"
                                    size="large"
                                >
                                    Edit Hotel
                                </Button>
                            </div>

                        </form>
                    </Paper>
                </Container>
            </Modal>
        </div>
    )
}

export default EditModal