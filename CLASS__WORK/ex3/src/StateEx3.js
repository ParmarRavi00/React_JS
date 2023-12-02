import { useState } from "react"

export default function MyLikes()
{

    const [like,setLike] = useState(true);

    function handleLikes(e)
    {
        setLike(e.target.checked)
    }

    return(
        <>
          
        <input

        type="checkbox"
        checked={like}
        onChange={handleLikes}
        /> You Liked this


        <h3>{(like)? "you liked this": "you did not like this...!"}</h3>
        </>
    )
}