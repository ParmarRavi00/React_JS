import { useState } from "react";

export default function NestedObj()
{

    // const[something,setSomething] = useState("intialValue")

    const[data,setData] = useState({

        name:"Harshit",
        article:{
            title:"Have Fun",
            city:"Ahmedabad"
        }
    })

    function ChangeName(e)
    {
      setData({
        ...data,
        name:e.target.value
      });
    }

    function ChangeTitle(e)
    {
      setData({
        ...data,
        article:{

            ...data.article,
            title: e.target.value
            
        }
      });

    }

    return(<>

        <input 
        value={data.name}
        onChange={ChangeName}
        />
        <input 
        value={data.article.title}
        onChange={ChangeTitle}
        />

        <input 
        value={data.article.city}
        onChange={(e)=>{

            setData({
                ...data,

                article:{
                   ...data.article,
                   city:e.target.value
                }

            })
        }}
        />
       
        <h2>{data.name}</h2>
        <h2>{data.article.title}</h2>
        <h2>{data.article.city}</h2>
    
    </>)


}