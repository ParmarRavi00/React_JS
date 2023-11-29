function TestEvent()
{
    const x=1;
  if(x==2)
  {
    alert("This is alert IF...!");
  }

  else{
    alert("This is alert ELSE...!");
  }

    return(<>
    
            {/* <TestEvent1/> */}
    
    </>)
 
}

function TestEvent1(e)
{
    
    document.getElementById("b1").innerHTML = e.type;
}

export default TestEvent1;