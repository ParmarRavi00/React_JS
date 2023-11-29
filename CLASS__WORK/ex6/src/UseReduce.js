import { useReducer, useState } from "react"


function Counter()
{

    const [count,setCount] = useState(0);
    const intialVal = {count:0}

    const reduce = (state,action) =>{

    console.log(action)
    console.log(action.type)

    switch(action.type)
    {
        case "increase" : return {count:state.count+1};

        case "decrease" : return {count:state.count-1};

        default: return state;

    }

        // return {count:state.count+1}
   }

    const [state,dispatch] = useReducer(reduce,intialVal)

    const inc = ()=>{

        // setCount(count+1)
        // dispatch();

        dispatch({type:"increase"})
    }

    const dec = ()=>{

        // setCount(count-1)

        dispatch({type:"decrease"})
    }

    return(
        <>
        
           {/* <h2> {count}</h2> */}
            <h2>{state.count}</h2>
              <button onClick={inc} >INC</button>
           <button onClick={dec}>DEC</button>
        </>
    )
}

export default Counter;