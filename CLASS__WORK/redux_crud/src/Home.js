import React from 'react';

function Home() {
    return (
        <div>

            <div className="container">

                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <td colSpan={5}><h3>View Employee Detail</h3></td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home;
