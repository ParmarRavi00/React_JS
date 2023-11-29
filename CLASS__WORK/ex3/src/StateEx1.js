import { useState } from "react";

export default function Counter()
{
    const [count,setCount] = useState(0);

    function inc()
    {
        // setCount(++count)
        setCount(count+1);
    }

    return(
        <>
        
        
        <button onClick={inc}>You have click {count} times</button>
        </>
    )
}