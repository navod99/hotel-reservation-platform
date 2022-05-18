import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { Typography } from '@mui/material';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PreviewIcon from '@mui/icons-material/Preview';
import axios from 'axios';
import DashboardView from './DashboardView';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 22px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    ListItemIcon: {
        marginLeft: 7,
        minWidth: 48
    },

}));

const HotelAdminDAshboard = () => {
    const classes = useStyles();
    const [header, setHeader] = useState({
        title: "Dashboard",
        icon: null
    });
    const [open, setOpen] = React.useState(true);
    const [view, setView] = useState(null);
    let hotel = JSON.parse(sessionStorage.getItem("token"))
    const[hotelDetails,setHotelDetails] = useState()

    useEffect(() => {
        // if(!token){
        //     history.push("/");
        // }
        // setView(<DashboardView />);
        function getHotels() {
          axios.get(`http://localhost:5000/hotel/${hotel.id}`).then((res) => {
            setHotelDetails(res.data);

          }).catch((err) => {
            alert(err.message);
            console.log(err.message);
          })
        }
        getHotels()
        
        setHeader({ title: 'Dashboard', icon: <DashboardIcon /> });
    }, []);

    const mainListItems = (
        <div>
            <ListItem button onClick={() => {
                 setView(<DashboardView hotelDetails={hotelDetails} />);
                setHeader({ title: 'Dashboard', icon: <DashboardIcon /> });
            }}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => {
                // setView(<AddHotels />);
                setHeader({ title: 'Add Package', icon: <AddIcon /> });
            }}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Package" />
            </ListItem>
            <ListItem button onClick={() => {
                // setView(<ViewHotels />);
                setHeader({ title: 'View Packages', icon: <PreviewIcon /> });
            }}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <PreviewIcon />
                </ListItemIcon>
                <ListItemText primary="View Packages" />
            </ListItem>
            <ListItem button onClick={() => {
                // setView(<ViewHotels />);
                setHeader({ title: 'Manage Bookings', icon: <BookIcon /> });
            }}>
                <ListItemIcon className={classes.ListItemIcon}>
                    <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Bookings" />
            </ListItem>

        </div>
    );



    const secondaryListItems = (
        <div>
            <ListItem button>
                {/* <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText onClick={goToLogout} primary="Logout" /> */}
            </ListItem>
        </div>
    );

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" color="secondary" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {header.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Typography variant='h6' style={{ fontWeight: 500 }}>
                        Traveler.com
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {view}
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        {/* <Typography variant="body2" color="text.secondary" align="center" marginTop={5} >
                            {'Copyright © '}
                            <Link color="inherit" href="https://mui.com/">
                                Traveler.com
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography> */}
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default HotelAdminDAshboard