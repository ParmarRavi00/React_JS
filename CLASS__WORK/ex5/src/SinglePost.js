import React, {useContext} from "react";
import { userdata } from "./UseContext";


function SinglePost()
{

    const user = useContext(userdata);

    // console.log(user);
    return(
        <>  
        <h1>Single Post</h1>
        {user.map((v)=>(
            <li key={v.id}>{v.name}</li>
        ))}


        </>
    )
}

export default SinglePost;