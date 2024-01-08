import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import MyAccount from './MyAccount';
import WhishList from './WhishList';
import Login from './Login';
import Register from './Register';
import ContactUs from './ContactUs';

function Routing() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/productList' element={<ProductList />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/myaccount' element={<MyAccount />}></Route>
                <Route path='/whishlist' element={<WhishList />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={< Register />}></Route>
                <Route path='/contact' element={< ContactUs />}></Route>
            </Routes>

        </>
    )
}

export default Routing;