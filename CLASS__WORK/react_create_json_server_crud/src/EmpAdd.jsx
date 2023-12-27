import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmpAdd() {

    const [id, changeId] = useState("");
    const [name, changeName] = useState("");
    const [email, changeEmail] = useState("");
    const [phone, changePhone] = useState("");
    const [isActive, changeIsActive] = useState(false);

    const BackToHome = useNavigate();

    const handleAdd = (e) => {

        e.preventDefault();

        const EmpData = { id, name, email, phone, isActive }

        fetch("http://localhost:3000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(EmpData)
        })
            .then((res) => {
                // console.log(res);
                alert("Added Successfully...!")
                BackToHome('/');
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className='container m-4'>

            <div className='container d-flex justify-content-center'>

                <div className='card col-5'>

                    <div className='card-title bg-light'>
                        <h1>Add Employee</h1>
                    </div>

                    <div className='card-body text-start'>
                        <form action="" onSubmit={handleAdd}>
                            <div className='m-1'>
                                <label htmlFor="" className='fs-5'>Id :</label>
                                <input type="text" className='form-control' disabled="disabled" value={id} onChange={(e) => { changeId(e.target.value) }} />
                            </div>
                            <div className='m-1'>
                                <label htmlFor="" className='fs-5'>Name :</label>
                                <input type="text" className='form-control' value={name} onChange={(e) => { changeName(e.target.value) }} />
                            </div>
                            <div className='m-1'>
                                <label htmlFor="" className='fs-5'>Email :</label>
                                <input type="text" className='form-control' value={email} onChange={(e) => { changeEmail(e.target.value) }} />
                            </div>
                            <div className='m-1'>
                                <label htmlFor="" className='fs-5'>Phone :</label>
                                <input type="text" className='form-control' value={phone} onChange={(e) => { changePhone(e.target.value) }} />
                            </div>
                            <div className='m-2'>
                                <input type="checkbox" className='form-check-input' checked={isActive} onChange={(e) => { changeIsActive(e.target.checked) }} />
                                {" "}<label htmlFor="" className='form-lable'> Is Active</label>
                            </div>
                            <div className='m-1'>
                                <button type="submit" className='btn btn-primary me-3'>Save</button>
                                <Link to='/'>
                                    <button type="button" className='btn btn-secondary'>Back</button>
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EmpAdd;
