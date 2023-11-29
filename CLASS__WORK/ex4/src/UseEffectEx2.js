import { useEffect, useState } from "react";

export default function Resource()
{
   const [resourceType,setResoucetype] = useState("posts");

   useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((res)=>{ return res.json()})
        .then((data)=>{

            console.log(data);
      
        })

   },[resourceType]);

    return(
        <>
        <button onClick={()=>{
            setResoucetype("posts")
        }}>POSTS</button>

        <button onClick={()=>{
            setResoucetype("users")
        }}>USERS</button>

        <button
        onClick={()=>{
            setResoucetype("comments")
        }}
        >COMMENTS</button>

        <h2>{resourceType}</h2>
        
        </>
    )
}