import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@mui/material/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

const TaxiModel = ({ setOpen, open, handleOpen, handleClose }) => {
    const classes = useStyles()
    const navigate = useNavigate()

    const taxi = () => {
        navigate('/pickup')
    }

    const payment = () => {
        navigate('/payment')
    }

    return (
        <div>
            <Dialog classes={{
                paper: classes.dialog
            }}

                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="customized-dialog-title">{"Confirm to submit"}</DialogTitle>
                <DialogContent dividers color="black">
                    <DialogContentText id="alert-dialog-description" color="black">
                        Do You want the Taxi Service?
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ paddingTop: "15px" }}>
                    <Link to='/payment'>
                        <Button color="primary" variant="outlined">
                            No
                        </Button>
                    </Link>
                    <Link to='/pickup'>
                        <Button color="secondary" variant="outlined" autoFocus>
                            Yes
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TaxiModel