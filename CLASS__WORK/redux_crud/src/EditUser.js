import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUsers } from './UserReducer';


function EditUser() {

    const dispatch = useDispatch();
    const { userid } = useParams();
    const navigate = useNavigate();

    const users = useSelector(state => state.users);
    console.log(users)

    const exisitingUser =
        users.filter((user) => (
            user.id == userid

        ))

    const { name, email } = exisitingUser[0];

    const [uname, setUname] = useState(name)
    const [uemail, setUemail] = useState(email)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateUsers({ id: userid, name: uname, email: uemail }))
        navigate('/')
    }
    return (
        <div>

            <div className='row justify-content-center text-start'>
                <div className='col-6'>



                    <form onSubmit={handleClick} className='container my-5'>
                        <h4 className='my-2'>Create User</h4>
                        <div className='col-12'>
                            <label className="form-label">ID</label>
                            <input disabled="disabled" className='form-control'></input>
                        </div>

                        <div className='col-12'>
                            <label className="form-label">Name</label>
                            <input value={uname} onChange={(e) => { setUname(e.target.value) }} className='form-control'></input>
                        </div>

                        <div className='col-12'>
                            <label className="form-label">Email</label>
                            <input value={uemail} onChange={(e) => { setUemail(e.target.value) }} className='form-control'></input>
                        </div>

                        <div className='col-12 my-3'>
                            <button className='btn btn-success'>Save</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default EditUser
