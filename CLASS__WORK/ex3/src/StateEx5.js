import { useState } from "react"

export default function Counter1()
{

    const [count,setCount] = useState(0);

    function increment()
    {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

         setCount(c=> c+1);//1
         setCount(c=> c+1);//2
         setCount(c=> c+1);//3
    }

    return(
        <>
        
        <h2>{count}</h2>
        <button onClick={increment}>INC</button>
        
        </>
    )
}