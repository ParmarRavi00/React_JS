import { useState } from "react"

export default function MyInput()
{
const [text,setText] = useState("TestInput");

function handleChange(e)
{
    setText(e.target.value)
}

    return(
        <>
        <input 
        type="text"
        value={text}

        onChange={handleChange}
        />

    <button onClick={()=>{setText("")}}>Reset</button>

        <h3>{text}</h3>
        
        
        </>
    )
}