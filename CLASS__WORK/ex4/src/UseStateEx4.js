import { useEffect, useState } from "react";

export default function Title() {
    
    const [Count, SetCount] = useState(0);

    useEffect(() => {
        document.title = `Chat (${Count})`
    })

    return (
        <>
            <h2>{Count}</h2>
            <button onClick={()=>{SetCount(Count + 1)}}>Count Chat</button>
        </>
    )
}