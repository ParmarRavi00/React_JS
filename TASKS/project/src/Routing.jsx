import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

function Routing() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Products />}></Route>
            </Routes>

        </>
    )
}

export default Routing;