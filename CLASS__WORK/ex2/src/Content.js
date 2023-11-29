import React from "react";

function EventEx()
{
    alert("this is Alert...!");
}

function EventClick()
{
    alert("this is CLICK Alert...!");
}

function EventMouseEnter()
{
    alert("this is MouseEnter Alert...!");
}

function EventMouseLeave()
{
    alert("this is MouseLeave Alert...!");
}

function EventDblClick()
{
    alert("this is DblClick Alert...!");
}

function EventBlur()
{
    alert("this is EventBlur Alert...!");
}

function EventkeyDown()
{
    alert("this is  EventkeyDown Alert...!");
}

function EventKeyUp()
{
    alert("this is EventKeyUp Alert...!");
}

function GetData(props)
{
    
    return(<>
    
        <p>{props.data.name}</p>
        <p>{props.data.email}</p>
        <p>{props.data.course}</p>
    
    </>)
}

function fetchAPI()
{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{return res.json()})
    .then((data)=>{

        let html = "API DATA ";
        data.map(function(details){       

            html = html + `
            
           <table border="1">
           <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>URL</td>
            <td>THUMBNAIL-URL</td>
           </tr>

           <tr>
           <td>${details.id}</td>
           <td style="width:250px">${details.title}</td>
           <td><img src="${details.url}" height="300px"/></td>
           <td><img src="${details.thumbnailUrl}" height="300px"/></td>
          </tr>
           </table>
            
            `
        })

        document.getElementById("info").innerHTML = html;

    })
   
}



const Content = ()=>{

    const data = {

        name:"Harshit",
        email:"h@gmail.com",
        course:"React JS"
    }

    const arr = [
        {name:"Raviraj",id:1},
        {name:"Vidhi",id:2},
        {name:"Mayur",id:3},
        {name:"Mayur",id:4}
    ]

    return(
        <>

            <div className="content">
                <div className="p1">
                    <h1>Functional Component</h1>
                    
                      <p>
                      {
                        arr.map((v, i) =>

                    <li key={i}>
                       {v.id +". " + v.name} 
                    </li>)
                    }
                      </p>
                    
                    <GetData data = {data}/>
                   
                    <button onClick={fetchAPI}>Get API data</button>
                    <div id="info"></div>
                    

                    <button onClick={()=>{alert("hello")}}>Click ME</button>
                    <button onClick={EventEx}>Click Alert2</button>

                    <button onClick={EventClick}>Click Alert2</button>
                    <button onMouseEnter={EventMouseEnter}>MouseEnter Alert2</button>
                    <button onMouseLeave={EventMouseLeave}>MouseLeave Alert2</button>
                    <button onDoubleClick={EventDblClick}>DblClick Alert2</button>

                    <input type="text" onBlur={EventBlur}/>
                    <input type="text" onKeyDown={EventkeyDown}/>
                    <input type="text" onKeyUp={EventKeyUp}/>
                    
                </div>

                <div className="p1">
                 <h1>Class Component</h1>

                 <ExampleState/>
                </div>
            </div>
        </>
    )

}
 export default Content;

 class ExampleState extends React.Component 
 {

    constructor()
    {   
        super();
        this.state = {
            name:"Harshit"
        }
    }

    ChangeName = ()=>{
    //    this.setState({
    //     name:"Karan"
    //    })

    this.setState((prevName)=>({
        name: prevName.name+ " " + "XYZ"
    }))
    }

    render()
    {
        return(
        <>
            {this.state.name}

            <button onClick={this.ChangeName}>Change State</button>

        </>
        
        
        )
    }
 }