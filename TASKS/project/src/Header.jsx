import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (

        <>
            {/* Top bar Start */}
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope" />
                            support@email.com
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt" />
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>
            {/* Top bar End */}


            {/* Nav Bar Start */}
            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">
                            MENU
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto">
                                <Link to={'/'} className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to={'/products'} className="nav-item nav-link">
                                    Products
                                </Link>
                                <Link to={'/productList'} className="nav-item nav-link">
                                    Product Detail
                                </Link>
                                <Link to={'/checkout'} className="nav-item nav-link">
                                    Checkout
                                </Link>
                                <Link to={'/myaccount'} className="nav-item nav-link">
                                    My Account
                                </Link>
                                <Link to={'/contact'} className="nav-item nav-link">
                                    Contact Us
                                </Link>

                            </div>
                            <div className="navbar-nav ml-auto">

                                <Link to={'login'} className="dropdown-item">
                                    Login
                                </Link>
                                <Link to={'register'} className="dropdown-item">
                                    Register
                                </Link>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Nav Bar End */}


            {/* Bottom Bar Start */}
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="img/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button>
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <Link to={'/whishlist'} className="btn wishlist">
                                    <i className="fa fa-heart" />

                                    <span>(0)</span>
                                </Link>
                                <Link to={'/cart'} className="btn cart">
                                    <i className="fa fa-shopping-cart" />
                                    <span>(0)</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar End */}


        </>
    )
}

export default Header;