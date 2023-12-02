import { useState } from "react";

export default function FormData()
{


    const [data,setData] = useState({
        fname : "Nirav",
        lname : "Patel"
    });

    function handleChange(e)
    {
        setData({
            ...data,
            fname:e.target.value,
            
        })
    }

    function handleChange1(e)
    {
        setData({
            ...data,
            lname:e.target.value
        })
    }

    return(
        <>

            <input
                value={data.fname}
                onChange={handleChange}
            />
             <input
                value={data.lname}
                onChange={handleChange1}
            />

            <p>{data.fname} {data.lname}</p>
       
        </>
    )
}