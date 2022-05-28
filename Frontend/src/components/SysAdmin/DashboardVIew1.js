import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  function createData(productName, availableStocks, section, stockstatus) {
    return { productName, availableStocks, section, stockstatus };
  }
  
  const useStyles = makeStyles({
    bx: {
      marginLeft: 300,
      marginTop: 50,
      maxWidth: 1150,
      textAlign: 'left',
  
    },
    typ: {
      color: 'black',
  
    }
  
  
  });

const DashboardVIew1 = () => {
    const classes = useStyles();
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        function getHotels() {
          axios.get("http://localhost:5000/hotel/").then((res) => {
            setHotels(res.data);
          }).catch((err) => {
            alert(err.message);
          })
        }
        getHotels()
    
      }, [])

  return (
    <div>
         <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell>Hotel Name</StyledTableCell>             
              <StyledTableCell>District</StyledTableCell>
              <StyledTableCell align="center">Admin Name</StyledTableCell>
              <StyledTableCell align="center">Admin Email</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((hotel) => (
              <StyledTableRow key={hotel.hotelName}>
                   <StyledTableCell component="th" scope="row">
                  {hotel.hotelName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {hotel.district}
                </StyledTableCell>
                <StyledTableCell align="center">{hotel.firstName} {hotel.lastName}</StyledTableCell>
                <StyledTableCell align="center">{hotel.email}</StyledTableCell>
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default DashboardVIew1