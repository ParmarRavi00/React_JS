import './App.css';
import React from 'react';
import PropTypes from "prop-types";
import TestEvent from "./Events";
import TestEvent1 from "./Events"

// console.log(any);

function App() {
  return (
   <>

<button onClick={TestEvent}>Click for Alert</button>
<br/>

<button onMouseLeave={TestEvent1}>Click</button>
<b id='b1'></b>
<br/>

<button onClick={TestEvent}>MouseEnter</button>
<br/>

   
   <h1>HEllo</h1>
   <Parent Age="12"/>
   <Child/>
   <PropEx age="34"/>
   <PropEx1/>

   </>
  );
}


function Parent(props)
{

  const name ="Abhinav";

  return(<>
    
    <h1>Hello Parent</h1>
    <h1>Hello {props.Age}</h1>
    <h1>{name}</h1>
  
  </>)
}


function Child(props)
{

  const myStyle = 
  {
    color:"lightblue",
    "background":"coral"
  }


  return(
    <>
    <h1>Child</h1>
    <h2>
      {
      props.arrayProp.map(function(v,i){

        // console.log(v)
        return(
          <>
           <li style={myStyle}>{i+1+"." +" " + v}</li>
          </>
        )

      })
       
      }
      
      </h2>

    <h2>{props.stringProp}</h2>
    <h2>{props.numberProp}</h2>
    <h2>{props.booleanProp}</h2>
    
    </>
  )
}


Child.propTypes = {

  arrayProp : PropTypes.array,
  stringProp : PropTypes.string,
  numberProp : PropTypes.number,

}


Child.defaultProps = {

  arrayProp : ["val1","val2","val3"],
  stringProp : "sdhfsdhf",
  numberProp : 123,
  booleanProp : 'true',

}


class PropEx extends React.Component
{

  x = "Anything"
  
  constructor()
  {
     super();
    // this.x ="This is the way";
  }


  render()
  {
    return(
      <>
        <h1>{this.props.age}</h1>
        <h1>{this.x}</h1>
        
      </>
    )
  }
}


// -------------------------------------------------


class PropEx1 extends React.Component 
{
  constructor(props)
  {
    super(props);
    // this.props.name ="Harshit";
  }
  // Xyz = (props)=> {

  //   return(<>
    
  //     <h1>{this.props.name}</h1>
    
  //   </>)
  // }


  render()
  {
    return(

      <>
      
       {/* <h1> {this.props.name}</h1> */}
       {/* <Xyz/> */}
      
      </>
    )
  }
}

export default App;
