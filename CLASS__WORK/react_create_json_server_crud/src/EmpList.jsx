import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmpList() {

    const [FinalEmpData, SetFinalEmpData] = useState([]);

    // console.log(EmpData);

    const ChangePage = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/employee")
            .then((res) => res.json())
            .then((data) => SetFinalEmpData(data))
            .catch((error) => console.error("Error fetching employee data:", error));
    }, []);

    const handleView = (id) => {
        ChangePage("/employee/view/" + id);
    }

    const handleEdit = (id) => {
        ChangePage("/employee/edit/" + id)
    }

    const handleDelete = (id) => {

        if (window.confirm("Are You Sure...?")) {

            fetch("http://localhost:3000/employee/" + id, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(FinalEmpData)
            })
                .then((res) => {
                    alert("Deleted Successfully...!");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }

    }

    return (
        <div>
            <div className='container'>
                <Link to='/employee/Add'>
                    <button className='btn btn-warning m-3'>Add Employee (+)</button>
                </Link>
                <div>
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {FinalEmpData && FinalEmpData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>Delete</button>
                                        <button className='btn btn-primary' onClick={() => handleView(item.id)}>View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpList;
