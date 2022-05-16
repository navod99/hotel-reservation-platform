import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import AddReservation from './Reservation/AddReservation.js'
import Date from './Reservation/date.js'
import Signup from './Signup';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element= {<Home/>}/>
                <Route path='/login' exact element= {<Login/>}/>
              <Route path ='/AddReservation'exact element= {<AddReservation/>}/>
                <Route path='/signup' exact element= {<Signup/>}/>
              

            </Routes>
        </BrowserRouter>
    )
}

export default Routing