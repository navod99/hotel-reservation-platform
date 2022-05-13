import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Addhotel from './Addhotel';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element= {<Home/>}/>
                <Route path='/login' exact element= {<Login/>}/>
                <Route path='/signup' exact element= {<Signup/>}/>
                <Route path = '/addhotel' exact element={<Addhotel/>}/>
              

            </Routes>
        </BrowserRouter>
    )
}

export default Routing