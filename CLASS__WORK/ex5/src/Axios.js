import React, { useEffect, useState } from 'react';

import axios from "./TestAxios";

function Axios() {

    const [data,setData] = useState([]);
    const [err,setErr] = useState("");

    useEffect(()=>{

        GetUsersData();
        // axios.get('/users')
        // .then((respose)=>{
        //     // console.log(respose);
        //     // console.log(respose.data);
        //     setData(respose.data)
        // })

        // .catch((error)=>{console.log (error.message)})

        // .catch((err)=>{setErr(err.message)})


    },[data]);


    async function GetUsersData()
    {
        try {

            const response = await axios.get('/users');
        console.log(response)
         setData(response.data)
            
        } catch (error) {
            setErr(error.message)
        }
    }

  return (
    <div>

        <b>{err}</b>
        {data.map((i)=>(
            <li key={i.id}>

                {i.name}
                {i.email}
                {i.username}
            </li>
        ))}
    </div>
  )
}

export default Axios
