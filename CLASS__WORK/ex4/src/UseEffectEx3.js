import { useEffect, useState } from "react";

export default function Timer() {
    
    const [Count, SetCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            SetCount(Count + 1)
        }, 1000)
    })

    return (
        <>
            <h2>I've rendered { Count} Times!</h2>
        </>
    )
}