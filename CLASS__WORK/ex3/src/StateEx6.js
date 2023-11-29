import { useState } from "react";

export default function MultiState()
{
    const[greet,setGreet]= useState("Hello");
    const[age,setAge]= useState(36);

    function handleChange(e)
    {
        setGreet(e.target.value)
    }

    function handleChange1()
    {
        setAge(age+1)
    }

    return(<>
    
        <input value={greet} onChange={handleChange}/>
        <input value={age}/>
        <p>{greet} your age:{age}</p>
        <button onClick={handleChange1}>Update Age</button>
    </>)
}