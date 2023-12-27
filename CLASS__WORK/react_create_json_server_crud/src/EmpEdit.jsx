import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {

    const [id, changeId] = useState("");
    const [name, changeName] = useState("");
    const [email, changeEmail] = useState("");
    const [phone, changePhone] = useState("");
    const [isActive, changeIsActive] = useState(false);

    const BackToHome = useNavigate();

    const { empId } = useParams();


    useEffect(() => {

        fetch("http://localhost:8000/employee/" + `${empId}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                changeId(data.id);
                changeName(data.name);
                changeEmail(data.email);
                changePhone(data.phone);
                changeIsActive(data.isActive);
            })
    }, [])

    const handleAdd = (e) => {

        e.preventDefault();

        const EmpData = { id, name, email, phone, isActive }

        fetch("http://localhost:8000/employee/" + empId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(EmpData)
        })
            .then((res) => {
                console.log(res);
                alert("Saved Successfully...!")
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

export default EmpEdit;
