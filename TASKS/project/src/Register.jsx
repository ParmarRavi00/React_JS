import React from 'react'

function Register() {
    return (
        <>

            {/* Breadcrumb Start */}
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Products</a>
                        </li>
                        <li className="breadcrumb-item active">Register</li>
                    </ul>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Register Start */}

            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="register-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name"</label>
                                        <input className="form-control" type="text" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="E-mail" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="Mobile No" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input className="form-control" type="text" placeholder="Password" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Retype Password</label>
                                        <input className="form-control" type="text" placeholder="Password" />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Register End */}

        </>
    )
}

export default Register;
