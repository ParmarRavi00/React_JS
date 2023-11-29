import { useEffect, useState } from "react"

export default function Counter()
{
    const [count, setCount] = useState(0);
    
    // useEffect(() => { }, []);

    useEffect(()=>{
        console.log(count)
    },[count]);

    function inc()
    {
        setCount(count+1)
    }

    return(
        <>
        
            <p>{count}</p>
            <button onClick={inc}>Increment</button>
        </>
    )
}