import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function EmpView() {

    const { empId } = useParams();

    // console.log(empId);

    const [Data, SetData] = useState("");

    // console.log(Data);

    useEffect(() => {

        fetch("http://localhost:8000/employee/" + `${empId}`)
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                SetData(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])
    return (
        <div className='containor m-5 '>

            <div className='containor d-flex justify-content-center'>

                <div className='col-5'>

                    <table className='table border'>
                        <thead className='table-dark'>
                            <tr>
                                <td colSpan={2}><h3>View Employee Details</h3></td>
                            </tr>
                        </thead>
                        <tbody style={{ "textAlign": "left" }}>
                            <tr>
                                <td>Id</td>
                                <td>: {Data.id}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>: {Data.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: {Data.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>: {Data.phone}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>: {(Data.isActive) ? "Is Active" : "Is Not Active"}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default EmpView;
