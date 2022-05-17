import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Addroom from './Addroom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Updatehotel from './Updateroom';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element= {<Home/>}/>
                <Route path='/login' exact element= {<Login/>}/>
                <Route path='/signup' exact element= {<Signup/>}/>
                <Route path = '/addhotel' exact element={<Addroom/>}/>
                <Route path = '/updatehotel' exact element={<Updatehotel/>}/>
              

            </Routes>
        </BrowserRouter>
    )
}

export default Routing